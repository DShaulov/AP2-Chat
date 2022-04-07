import './Styles/ContactDisplay.css';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import { Button, Dropdown } from 'react-bootstrap';

function ContactDisplay(props) {
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
    const [ showAddContactPopup, setShowAddContactPopup ] = useState(false);
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
    console.log(props.userProfileImages[props.currentUser]);
    return (
        <div className="Contact-Display-div">
            {
                (windowWidth > 850) && (windowHeight > 950)
                ?
                <div className="Contact-Display-div__navbar">
                    <div className="Contact-Display-div__navbar__img-div">
                        <img className="Contact-Display-div__navbar__img-div__img" 
                        src={require(`../../userImages/${props.userProfileImages[props.currentUser]}`)} alt=''></img>
                    </div>
                    <div className="Contact-Display-div__navbar__username-div">
                        <h1 className="Contact-Display-div__navbar__username-div__header">{props.currentUser}</h1>
                    </div> 
                    <div className="Contact-Display-div__navbar__options-menu-div">
                        <Dropdown className="Contact-Display-div__navbar__options-menu-div__dropdown">
                            <Dropdown.Toggle variant="dark">
                                <List size={"2.75em"}  className="list-icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item>Add Contact</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>   
                    </div>
                </div> 
                :
                <div className="Contact-Display-div__navbar">
                    <div className="Contact-Display-div__navbar__img-div">
                        <img className="Contact-Display-div__navbar__img-div__img-small" 
                        src={require(`../../userImages/${props.userProfileImages[props.currentUser]}`)} alt=''></img>
                    </div>
                    <div className="Contact-Display-div__navbar__username-div-small">
                        <h2 className="Contact-Display-div__navbar__username-div-small__header">{props.currentUser}</h2>
                    </div> 
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
                </div>
            }
            
        </div>
    );
};
export default ContactDisplay;