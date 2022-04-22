import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import AppRouter from './components/App-Router/AppRouter';
import hardcodedMessages from './HardcodedMessages';
import hardcodedUsers from './HardcodedUsers';

function App() {
    const [ currentUser, setCurrentUser ] = useState('');
    const [ users, updateUsers ] = useState(hardcodedUsers);
    const [ messages, updateMessages ] = useState(hardcodedMessages);
    /**
     * Checks whether or not a username is already taken
     */
    function isUsernameTaken(username) {
        for (const user in Object.keys(users)) {
            if (user === username) {
                return true;
            }
        }
        return false;
    };
    /**
     * TODO
     * Adds user to users database
     */
    function addUser(username, password, nickname) {
        if (!isUsernameTaken(username)){
            let updatedUsers = {...users};
            updatedUsers[username] = {
                password: password, 
                displayName: nickname,
                profileImage: `default-user.png`,
                contacts: [],
            }
            updateUsers(updatedUsers);
            let updatedMessages = {...messages};
            updatedMessages[username] = {};
            updateMessages(updatedMessages);
        }
        return false;
    };
    /**
     * Check if provided password and username match
     */
    function isUserValid(username, password) {
        if (users[username].password === password) {
            return true;
        }
        return false;
    }
    const loginFunctions = {
        isUserValid: isUserValid,
        setCurrentUser: setCurrentUser,
    };
    const registerFunctions = {
        isUsernameTaken: isUsernameTaken,
        addUser: addUser
    };
    const chatFunctions = {
        updateUsers: updateUsers,
        updateMessages: updateMessages
    }
    return (
        <AppRouter
        registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}
        currentUser={currentUser} users={users} messages={messages}/>
    );
}
export default App;