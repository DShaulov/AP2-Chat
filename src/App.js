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
        console.log(storageCurrentUser);
        if (storageCurrentUser !== null) {
            return storageCurrentUser
        }
        return '';
    }

    const [ users, updateUsers ] = useState({
        'David': {
            password: '123',
            displayName: 'David DIS',
            profileImage: 'default-user.png',
            contacts: ['Max', 'Messi']
        },
    	'Yoni': {
            password: '123',
            displayName: 'Yoni DIS',
            profileImage: 'default-user.png',
            contacts: ['Ronaldo', 'Messi']
        },
        'Messi': {
            password: '123',
            displayName: 'Leo',
            profileImage: 'default-user.png',
            contacts: ['Ronaldo', 'Messi']
        },
        'Ronaldo': {
            password: '123',
            displayName: 'Cristiano',
            profileImage: 'default-user.png',
            contacts: ['Ronaldo', 'Messi']
        },
        'Max': {
            password: '123',
            displayName: 'Max V',
            profileImage: 'default-user.png',
            contacts: ['Ronaldo', 'Messi']
        },
    });
    const [ userProfileImages, updateUserProfileImages ] = useState({
        'David': 'default-user.png',
    	'Yoni': 'default-user.png',
        'Messi': 'default-user.png',
        'Ronaldo': 'default-user.png',
        'Max': 'default-user.png'
    });
    const [ contacts, updateContacts ] = useState({
        'David': ['Max', 'Messi']
    })
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