import './Styles/RegisterScreen.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function hasNumber(myString) {
    return /\d/.test(myString);
  }

function RegisterScreen(props) {
    const [usernameNotFilled,usernameWorng, setUsernameNotFilled] = useState(false);
    const [passwordNotFilled, setPasswordNotFilled] = useState(false);
    const [userNotValid, setUserNotValid] = useState(false);
    /**
     * Handles submission of register form - 
     * If username or password fields are empty or invalid displays error
     
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let nickname = e.target[2].value;

        // If username/password empty, display warning
        if (username === ''|| !hasNumber(username)) {
            setUsernameNotFilled(true);
        } else {
            if (usernameNotFilled) {setUsernameNotFilled(false)};
        }
        if (password === '') {
            setPasswordNotFilled(true);
        }
        else {
            if (passwordNotFilled) {setPasswordNotFilled(false)};
        }
        if (usernameNotFilled || passwordNotFilled) {
            setUserNotValid(false);
            return;
        }
        if (props.functions.isUserValid(username, password)) {
            localStorage.setItem('currentUser', username);
            localStorage.setItem('loggedIn', true);
            props.functions.setCurrentUser(username);
            props.functions.setLoggedIn(true);
            if (userNotValid) {
                setUserNotValid(false)
            };
            return;
        } else {
            setUserNotValid(true);
        }

    }
    return (
        <div className="register-screen-div">
        <Form onSubmit={handleSubmit} className="register-screen-div__form">
        <Form.Group className="register-screen-div__form__username-grp">
            <Form.Label>Username:</Form.Label>
            <Form.Control placeholder="Enter username"></Form.Control>
            {usernameNotFilled && 
            <Form.Text className="register-screen-div__form__warning-text">*Username cannot be empty</Form.Text>
            }
        </Form.Group>
        <Form.Group className="register-screen-div__form__password-grp">
            <Form.Label>Password:</Form.Label>
            <Form.Control placeholder="Enter password"></Form.Control>
            {passwordNotFilled &&
            <Form.Text className="register-screen-div__form__warning-text">*Password cannot be empty</Form.Text>
            }
        </Form.Group>
        <Form.Group className="register-screen-div__form__nickname-grp">
            <Form.Label>Nickname:</Form.Label>
            <Form.Control placeholder="Enter display name"></Form.Control>
            {passwordNotFilled &&
            <Form.Text className="register-screen-div__form__warning-text">*Password cannot be empty</Form.Text>
            }
        </Form.Group>
        <Form.Group className="register-screen-div__form__btn-link-grp">
            <Button variant="primary" type="submit" className="register-screen-div__form__register-btn">Register</Button>
        </Form.Group>
    </Form>
    {userNotValid &&
    <p className="register-screen-div__form__warning-text">*Username and password dont match</p>
    }

    <p className="register-screen-div__register-link-paragraph">Already registered?  <Link to='/'>Click here</Link> to login.</p>
        </div>
    );

    
}
export default RegisterScreen;