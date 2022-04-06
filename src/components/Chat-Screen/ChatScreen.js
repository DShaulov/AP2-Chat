import './Styles/ChatScreen.css';
import MessageDisplay from './MessageDisplay';
import ContactDisplay from './ContactDisplay';

function ChatScreen(props) {
    return (
        <div className="ChatScreen-div">
            <div className="ChatScreen-div__ContactDisplay-div">
                <ContactDisplay currentUser={props.currentUser}/>
            </div>
            <div className="ChatScreen-div__MessageDisplay-div">
                <MessageDisplay/>
            </div>
        </div>
    );
}
export default ChatScreen;