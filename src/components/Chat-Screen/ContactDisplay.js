import './Styles/ContactDisplay.css';
import { useState } from 'react';

function ContactDisplay(props) {
    const [ displayOptions, setDisplayOptions ] = useState(false);
    return (
        <div className="Contact-Display-div">
            <div className="Contact-Display-div__name-options-div">
                <h1>{props.currentUser}</h1>
            </div>
            <div className="Contact-Display-div__contacts-div">
                <p>Testing</p>
            </div>
        </div>
    );
};
export default ContactDisplay;