import './Styles/LoginScreen.css';
import { useState } from 'react';

function LoginScreen(props) {
    const [notAllFilled, setNotAllFilled] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let userName = e.target[0].value;
        let password = e.target[1].value;
    }
    return (
        <div className="login-screen-div">
            
        </div>
    );
}

export default LoginScreen;