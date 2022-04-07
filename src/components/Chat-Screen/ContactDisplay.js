import './Styles/ContactDisplay.css';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import { Button, Dropdown, ListGroup, Modal, Form } from 'react-bootstrap';


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
     * Creates the list items making up the contact list
     */
    function makeContactList() {
        let contactListItems = [];
        console.log(props.users);
        let currentUserContacts = props.users[props.currentUser].contacts;
        for (const contact of currentUserContacts) {
            contactListItems.push(
                <ListGroup.Item action onClick={openChat} className="overflow-hidden">
                    <div className="list-card-div">
                        <div className="list-card-div__profile-image-div">
                            <img className="list-card-div__profile-image-div__img" 
                            src={require(`../../userImages/${props.users[contact].profileImage}`)} alt=''></img>
                        </div>
                        <div className="list-card-div__contact-name-div">
                            <div clasName="list-card-div__contact-name-div__name-title-div">
                                <h5 className="list-card-div__contact-name-div__name-title-div__name-title">{props.users[contact].displayName}</h5>
                            </div>
                            <div className="list-card-div__contact-name-div__last-message-div">
                                <p className="list-card-div__contact-name-div__last-message-div__last-message">Sed ut perspiciatis, unde omnis iste natus
                                 error sit voluptatem accusantium doloremque laudantium,
                                 totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                 , explicabo. Nemo enim ipsam voluptatem, quia voluptas sit</p>   
                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
            );
        };
        return contactListItems;
    };
    /**
     * TODO
     */
    function openChat(event) {
        console.log("OPEN CHAT");
    }
    /**
     * Checks if contact exists
     */
    function contactExists(contactUserName) {
        for (const user in Object.keys(props.users)) {
            console.log(user);
            if (user === contactUserName) {
                return true;
            }
        }
        return false;
    };
    /**
     * Adds contact if it exists
     */
    function addContact() {
    };
    return (
        <div className="Contact-Display-div">
            {
                (windowWidth > 850) && (windowHeight > 950)
                ?
                <div className="Contact-Display-div__navbar">
                    <div className="Contact-Display-div__navbar__options-menu-div">
                        <Dropdown className="Contact-Display-div__navbar__options-menu-div__dropdown">
                            <Dropdown.Toggle variant="dark">
                                <List size={"2.75em"}  className="list-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item action onClick={()=>{setShowAddContactPopup(!showAddContactPopup)}}>Add Contact</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>   
                    </div>
                    
                    <div className="Contact-Display-div__navbar__username-div">
                        <h1 className="Contact-Display-div__navbar__username-div__header">{props.users[props.currentUser].displayName}</h1>
                    </div>
                    <div className="Contact-Display-div__navbar__img-div">
                        <img className="Contact-Display-div__navbar__img-div__img" 
                        src={require(`../../userImages/${props.users[props.currentUser].profileImage}`)} alt=''></img>
                    </div> 
                </div> 
                :
                <div className="Contact-Display-div__navbar">
                    <div className="Contact-Display-div__navbar__options-menu-div">
                        <Dropdown className="Contact-Display-div__navbar__options-menu-div__dropdown">
                            <Dropdown.Toggle variant="dark">
                                <List size={'2em'}  className="list-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item>Add Contact</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>     
                    </div>
                    <div className="Contact-Display-div__navbar__username-div-small">
                        <h2 className="Contact-Display-div__navbar__username-div-small__header">{props.currentUser}</h2>
                    </div> 
                    <div className="Contact-Display-div__navbar__img-div">
                        <img className="Contact-Display-div__navbar__img-div__img-small" 
                        src={require(`../../userImages/${props.users[props.currentUser].profileImage}`)} alt=''></img>
                    </div>
                </div>
            }
            <div className="Contact-Display-div__contacts-div">
                <ListGroup className="overflow-auto custom-list">
                    {makeContactList()}
                </ListGroup>
            </div>
            <Modal class="modal" show={showAddContactPopup} onHide={()=>{setShowAddContactPopup(false)}}>
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