import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Login-Screen/LoginScreen';
import LoginScreen from './components/Login-Screen/LoginScreen';
import NavBar from './components/Navbar/Navbar';
import { useState, useRef } from 'react';
import RegisterScreen from './components/Register-Screen/RegisterScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatScreen from './components/Chat-Screen/ChatScreen';
import AppRouter from './components/App-Router/AppRouter';

function App() {
    // Create hardcoded user 'test' with password 123
    const [ users, updateUsers ] = useState({
        'test' : '123',
        'David': 'Abc123'
    });
    //const [ loggedIn , setLoggedIn ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState('');
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
        for (const key of Object.keys(users)) {
            console.log(key);
        }
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
        <AppRouter  registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}/>
    );
}
export default App;
