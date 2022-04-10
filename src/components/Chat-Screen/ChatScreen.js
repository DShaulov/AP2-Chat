import './Styles/ChatScreen.css';
import MessageDisplay from './MessageDisplay';
import ContactDisplay from './ContactDisplay';
import { useState } from 'react';

function ChatScreen(props) {
    const [ messages, updateMessages ] = useState({
        'Batman': {
            'Superman': [],
            'Messi': [
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:23',
                    content: 'Im vengeance.'
                },
                {
                    type: 'TEXT',
                    direction: 'FROM',
                    date: '9/4/2022',
                    time: '18:24',
                    content: 'Que?'
                }, 
                {
                    type: 'TEXT',
                    direction: 'FROM',
                    date: '9/4/2022',
                    time: '18:25',
                    content: 'No hablo ingles'
                }
            ],
            'Ronaldo': [],
            'Max': [
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:45',
                    content: 'Hey Max, how did the race go?'
                },
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:46',
                    content: 'Im Batman.'
                },
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:47',
                    content: 'Im Batman.'
                },
            ]
        },
        'Superman': {
            'Batman': [],
            'Messi': [],
            'Ronaldo': [],
            'Max': []
        },
        'Messi': {
            'Superman': [],
            'Batman': [
                {
                    type: 'TEXT',
                    direction: 'FROM',
                    date: '9/4/2022',
                    time: '18:23',
                    content: 'Im Batman.'
                    
                },
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:24',
                    content: 'Que?'
                }, 
                {
                    type: 'TEXT',
                    direction: 'TO',
                    date: '9/4/2022',
                    time: '18:25',
                    content: 'No hablo ingles'
                }
            ],
            'Ronaldo': [],
            'Max': []
        },
        'Ronaldo': {
            'Superman': [],
            'Messi': [],
            'Batman': [],
            'Max': []
        },
        'Max': {
            'Superman': [],
            'Messi': [],
            'Ronaldo': [],
            'Batman': []
        }
    });
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
    const messageDisplayFunctions = {
        updateMessages
    }
    return (
        <div className="ChatScreen-div">
            <div className="ChatScreen-div__ContactDisplay-div">
                <ContactDisplay functions={contactDisplayFunctions} currentUser={props.currentUser} users={props.users} messages={messages}/>
            </div>
            <div className="ChatScreen-div__MessageDisplay-div">
                {
                    showMessageDisplay &&
                    <MessageDisplay userChattingWith={chattingWith} currentUser={props.currentUser} users={props.users} messages={messages} functions={messageDisplayFunctions}/>
                }
            </div>
        </div>
    );
}
export default ChatScreen;