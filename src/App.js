import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import AppRouter from './components/App-Router/AppRouter';
import hardcodedMessages from './HardcodedMessages';
import hardcodedUsers from './HardcodedUsers';

function App() {
    const [ currentUser, setCurrentUser ] = useState(getCurrentUser());
    const [ users, updateUsers ] = useState(hardcodedUsers);
    const [ messages, updateMessages ] = useState(hardcodedMessages);
    /**
     * Checks local storage for who the current user is
     */
    function getCurrentUser() {
        let storageCurrentUser = localStorage.getItem('currentUser');
        if (storageCurrentUser !== null) {
            return storageCurrentUser
        }
        return '';
    }
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
    function addUser(username, password) {
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