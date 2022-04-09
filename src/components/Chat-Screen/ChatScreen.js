import './Styles/ChatScreen.css';
import MessageDisplay from './MessageDisplay';
import ContactDisplay from './ContactDisplay';
import { useState } from 'react';

function ChatScreen(props) {
    const [ showMessageDisplay, setShowMessageDisplay ] = useState(false);
    const [ chattingWith, setChattingWith ] = useState('');
    const setLoggedIn = props.functions.setLoggedIn;
    const updateUsers = props.functions.updateUsers;
    const contactDisplayFunctions = {
        updateUsers,
        setLoggedIn,
        openMessageDisplay
    }
    /**
     * Opens the chat window with the appropriate user
     */
    function openMessageDisplay(username) {
        if (username === chattingWith) {
            setShowMessageDisplay(false);
            setChattingWith('');
        }
        else {
            setShowMessageDisplay(true);
            setChattingWith(username);
        }
    }
    return (
        <div className="ChatScreen-div">
            <div className="ChatScreen-div__ContactDisplay-div">
                <ContactDisplay functions={contactDisplayFunctions} currentUser={props.currentUser} users={props.users}/>
            </div>
            <div className="ChatScreen-div__MessageDisplay-div">
                {
                    showMessageDisplay &&
                    <MessageDisplay userChattingWith={chattingWith} users={props.users}/>
                }
            </div>
        </div>
    );
}
export default ChatScreen;