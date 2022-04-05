import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Login-Screen/LoginScreen';
import LoginScreen from './components/Login-Screen/LoginScreen';
import NavBar from './components/Navbar/Navbar';
import { useState, useRef } from 'react';
import RegisterScreen from './components/Register-Screen/RegisterScreen';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatScreen from './components/Chat-Screen/ChatScreen';

function App() {
    // Create hardcoded user 'test' with password 123
    let users = useRef({ 'test': 123 });
    const [ loggedIn , setLoggedIn ] = useState(false);
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
        users[username] = password;
    };
    return (
        <Router>
            <div className="App">
                <NavBar></NavBar>
                <div className="App__content">
                    <Routes>
                        {loggedIn ?
                        <Route path="/" element={<ChatScreen/>}/> :
                        <Route path="/" element={<LoginScreen/>}/>
                        }
                        <Route path="/" element={<RegisterScreen/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
        
    );
}
export default App;
