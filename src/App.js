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
        'David': '123',
    	'Yoni': '123',
        'Messi': '123',
        'Ronaldo': '123',
        'Max': '123'
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
        if (username in users) {
            return true;
        }
        return false;
    };
    /**
     * Adds user to users database
     */
    function addUser(username, password) {
        let pair = {};
        pair[username] = password;
        updateUsers({ ...users, ...pair});
    };
    /**
     * Check if provided password and username match
     */
    function isUserValid(username, password) {
        if (users[username] === password) {
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

    }
    return (
        <AppRouter
        registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}
        currentUser={currentUser} userProfileImages={userProfileImages}/>
    );
}
export default App;


/**
 * App - users
 * Approuter - loggedIn
 * 
 */