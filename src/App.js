import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useRef } from 'react';
import AppRouter from './components/App-Router/AppRouter';

function App() {
    const [ currentUser, setCurrentUser ] = useState(getCurrentUser());
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

    const [ users, updateUsers ] = useState({
        'Batman': {
            password: '123',
            displayName: 'Batman',
            profileImage: 'batman-cropped.png',
            contacts: ['Max', 'Messi']
        },
    	'Superman': {
            password: '123',
            displayName: 'Superman',
            profileImage: 'superman-cropped.png',
            contacts: ['Batman', 'Messi']
        },
        'Messi': {
            password: '123',
            displayName: 'Messi',
            profileImage: 'messi-cropped.png',
            contacts: ['Ronaldo', 'Batman']
        },
        'Ronaldo': {
            password: '123',
            displayName: 'Ronaldo',
            profileImage: 'ronaldo-cropped.png',
            contacts: ['Superman', 'Messi']
        },
        'Max': {
            password: '123',
            displayName: 'Max',
            profileImage: 'max-v.png',
            contacts: ['Ronaldo', 'Superman']
        },
    });
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
        updateUsers: updateUsers
    }
    return (
        <AppRouter
        registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}
        currentUser={currentUser} users={users}/>
    );
}
export default App;