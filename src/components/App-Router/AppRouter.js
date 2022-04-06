import './Styles/AppRouter.css'
import { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import RegisterScreen from '../Register-Screen/RegisterScreen';
import LoginScreen from '../Login-Screen/LoginScreen';
import ChatScreen from '../Chat-Screen/ChatScreen';

function AppRouter(props) {
    const [loggedIn, setLoggedIn] = useState(getLoggedIn());
    const loginFunctions = {...props.loginFunctions, setLoggedIn:setLoggedIn};
    /**
     * Checks local storage for whether or not a user is logged in
     */
    function getLoggedIn() {
        let storedLoggedIn = localStorage.getItem('loggedIn');
        if (storedLoggedIn !== null) {
            let loggedIn = JSON.parse(storedLoggedIn);
            return loggedIn;
        }
        else{
            return false;
        }
    }
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="App__content">
                    <Routes>
                        {loggedIn ?
                        <Route path="/" element={<ChatScreen functions={props.chatFunctions} currentUser={props.currentUser}/>}/> :
                        <Route path="/" element={<LoginScreen functions={loginFunctions}/>}/>
                        }
                        <Route path="/register" element={<RegisterScreen functions={props.registerFunctions}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
export default AppRouter;