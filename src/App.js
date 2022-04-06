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
        'test' : '123',
        'David': 'Abc123',
    	'Yoni': '12345678'
    });
    //TODO
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
        <AppRouter registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions} currentUser={currentUser}/>
    );
}
export default App;
