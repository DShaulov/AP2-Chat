import { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import RegisterScreen from '../Register-Screen/RegisterScreen';
import LoginScreen from '../Login-Screen/LoginScreen';
import ChatScreen from '../Chat-Screen/ChatScreen';
function AppRouter(props) {
    const [loggedIn, setLoggedin] = useState(props.loggedIn)
    var  a = 123;
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="App__content">
                    <Routes>
                        {loggedIn ?
                        <Route path="/" element={<ChatScreen functions={props.chatFunctions}/>}/> :
                        <Route path="/" element={<LoginScreen functions={props.loginFunctions}/>}/>
                        }
                        <Route path="/register" element={<RegisterScreen variable={setLoggedin} functions={props.registerFunctions}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
export default AppRouter;