import './Styles/ContactDisplay.css';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import { Button, Dropdown, ListGroup, Modal, Form, Navbar, Container, Image } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';


function ContactDisplay(props) {
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
    const [ showAddContactPopup, setShowAddContactPopup ] = useState(false);
    const [ contactDoesNotExist, setContactDoesNotExist ] = useState(false);
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    });
    /**
     * Deletes local storage associated with user and logs him out
     */
    function logOut() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loggedIn');
        props.functions.setLoggedIn(false);
    }
    /**
     * Opens the message display upon clicking on a contact
     */
    function openChat(event) {
        let parentElement = event.target;
        while (parentElement.nodeName !== 'BUTTON') {
            parentElement = parentElement.parentNode;
        }
        props.functions.openMessageDisplay(parentElement.name);
    }
    /**
     * Creates the list items making up the contact list
     */
    function makeContactList() {
        let contactListItems = [];
        let id = 0;
        let currentUserContacts = props.users[props.currentUser].contacts;
        for (const contact of currentUserContacts) {
            contactListItems.push(
                <ListGroup.Item action="true" onClick={openChat} className="overflow-hidden" key={id} name={contact}>
                    <div className="list-card-div">
                        <div className="list-card-div__profile-image-div">
                            <img className="list-card-div__profile-image-div__img" 
                            src={require(`../../userImages/${props.users[contact].profileImage}`)} alt=''></img>
                        </div>
                        <div className="list-card-div__contact-name-div">
                            <div className="list-card-div__contact-name-div__name-title-div">
                                <h5 className="list-card-div__contact-name-div__name-title-div__name-title">{props.users[contact].displayName}</h5>
                            </div>
                            <div className="list-card-div__contact-name-div__last-message-div">
                                <p className="list-card-div__contact-name-div__last-message-div__last-message">{parseLastMessage(contact)}</p>   
                            </div>
                        </div>
                        <div className="list-card-div__time-div">
                            <time className="list-card-div__time-div__time">{parseLastMessageTime(contact)}</time>
                        </div>
                    </div>
                </ListGroup.Item>
            );
            id ++;
        };
        return contactListItems;
    };
    /**
     * Retrives the last message exchanged between users
     */
    function parseLastMessage(contact) {
        let allMessages = props.messages[props.currentUser][contact];
        if (allMessages.length !== 0) {
            let lastMessage = allMessages[allMessages.length - 1];
            return lastMessage.content;
        }
        return '';
    }
    /**
     * Retries the time of the last message exchange
     */
    function parseLastMessageTime(contact) {
        let allMessages = props.messages[props.currentUser][contact];
        if (allMessages.length !== 0) {
            let lastMessage = allMessages[allMessages.length - 1];
            return lastMessage.time;
        }
        return '';
    }
    /**
     * Checks if contact exists
     */
    function contactExists(contactUserName) {
        for (const user in props.users) {
            if (user === contactUserName) {
                return true;
            }
        }
        return false;
    };
    /**
     * Adds contact if it exists
     */
    function addContact(e) {
        e.preventDefault();
        let username = e.target[0].value;
        if (contactExists(username) && username !== props.currentUser) {
            // Add to contacts
            let updatedUsers = {...props.users};
            if (!updatedUsers[props.currentUser].contacts.includes(username)) {
                updatedUsers[props.currentUser].contacts.push(username);
            }
            if (!updatedUsers[username].contacts.includes(props.currentUser)) {
                updatedUsers[username].contacts.push(props.currentUser);
            }
            // Update messages
            console.log(props.messages);
            props.messages[props.currentUser][username] = [];
            props.messages[username][props.currentUser] = [];
            hideModal();
            props.functions.updateUsers(updatedUsers);
        }
        else {
            setContactDoesNotExist(true);
        }
    };
    function hideModal() {
        setShowAddContactPopup(false);
        setContactDoesNotExist(false);
    }
    return (
        <div className="Contact-Display-div">
            <Navbar className="custom-navbar" bg="light" variant="light">
                <Container className="custom-navbar__image-brand-container">
                    <Image src={require(`../../userImages/${props.users[props.currentUser].profileImage}`)} className="custom-navbar__image"></Image>
                    <Navbar.Brand className="custom-navbar__brand"><h5>{props.users[props.currentUser].displayName}</h5></Navbar.Brand>
                    <Dropdown drop={"start"}>
                        <DropdownToggle>Options</DropdownToggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>{setShowAddContactPopup(true)}}>Add Contact</Dropdown.Item>
                            <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
            <div className="Contact-Display-div__contacts-div">
                <ListGroup className="overflow-auto custom-list">
                    {makeContactList()}
                </ListGroup>
            </div>
            <Modal  show={showAddContactPopup} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form onSubmit={addContact} className="modal__form">
                            <Form.Group >
                                <Form.Label>Contact:</Form.Label>
                                <Form.Control placeholder="Enter contact username"></Form.Control>
                                {contactDoesNotExist &&
                                <Form.Text className="warning-text">*Contact does not exist</Form.Text>
                                }
                            </Form.Group>
                            <Form.Group className="modal__form__add-btn-grp">
                                <Button variant="primary" type="submit" className="modal__form__add-btn">Add</Button>
                            </Form.Group>
                        </Form>
                </Modal.Body>
            </Modal>
        </div>
        
    );
};
export default ContactDisplay;