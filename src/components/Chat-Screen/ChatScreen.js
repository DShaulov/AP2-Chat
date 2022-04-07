import './Styles/ChatScreen.css';
import MessageDisplay from './MessageDisplay';
import ContactDisplay from './ContactDisplay';

function ChatScreen(props) {
    const setLoggedIn = props.functions.setLoggedIn;
    const contactDisplayFunctions = {
        setLoggedIn
    }
    return (
        <div className="ChatScreen-div">
            <div className="ChatScreen-div__ContactDisplay-div">
                <ContactDisplay functions={contactDisplayFunctions} currentUser={props.currentUser} userProfileImages={props.userProfileImages}/>
            </div>
            <div className="ChatScreen-div__MessageDisplay-div">
                <MessageDisplay/>
            </div>
        </div>
    );
}
export default ChatScreen;