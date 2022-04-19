import './Styles/RegisterScreen.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function hasNumber(myString) {
    return /\d/.test(myString);
  }
  function hasChar(myString) {
    var regExp = /[a-zA-Z]/g;
    if(regExp.test(myString)){
        return true;
        }
        return false;
}

function RegisterScreen(props) {
    const [usernameNotFilled, setUsernameNotFilled] = useState(false);
    const [passwordNotFilled, setPasswordNotFilled ] = useState(false);
    const [userNotValid, setUserNotValid] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [usernameTaken, setUsernameTaken] = useState(false);



    const [nicknameNotFilled, setNicknameNotFilled] = useState(false);

    /**
     * Handles submission of register form - 
     * If username or password fields are empty or invalid displays error
     
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let ConfirmPassword = e.target[2].value;
        let nickname = e.target[3].value;

         
        // If username/password empty, display warning
        if (username === '') {
            setUsernameNotFilled(true);
        }
         else {
            if (usernameNotFilled) {setUsernameNotFilled(false)};
        }
        if (props.functions.isUsernameTaken(username)) {
            setUsernameTaken(true);
        }
         else {
            if (usernameTaken) {setUsernameTaken(false)};
        }
        
        if (password === '') {
            setPasswordNotFilled(true);
        }
        else {
            if (passwordNotFilled) {setPasswordNotFilled(false)};
        }
        if ((!hasNumber(password) || !hasChar(password))&& !passwordNotFilled) {
            setPasswordWrong(true);
        }
         else {
            if (passwordWrong) {setPasswordWrong(false)};
        }
        if (password != ConfirmPassword && !passwordWrong && !passwordNotFilled) {
            setPasswordConfirm(true);
        }
        else {
            if (passwordConfirm) {setPasswordConfirm(false)};
        }
        if (nickname === '') {
            setNicknameNotFilled(true);
        }
         else {
            if (nicknameNotFilled) {setNicknameNotFilled(false)};
        }
        if (usernameNotFilled || passwordNotFilled || nicknameNotFilled) {
            setUserNotValid(false);
            return;
        }
        if (props.functions.isUserValid(username, password)) {
          //  localStorage.setItem('currentUser', username);
          //  localStorage.setItem('loggedIn', true);
            props.functions.updateUsers(username);
            //props.functions.users(true);
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
            {usernameTaken && 
                <Form.Text className="register-screen-div__form__warning-text">*Username already taken</Form.Text>
            }
            
        </Form.Group>
        <Form.Group className="register-screen-div__form__password-grp">
            <Form.Label>Password:</Form.Label>
            <Form.Control placeholder="Enter password"></Form.Control>
            {passwordNotFilled &&
            <Form.Text className="register-screen-div__form__warning-text">*Password cannot be empty</Form.Text>
            }
            {passwordWrong &&
                <Form.Text className="register-screen-div__form__warning-text">*Password must have numbers and letters</Form.Text>
                }
                </Form.Group>
                <Form.Group className="register-screen-div__form__password-grp">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control placeholder="Confirm password"></Form.Control>
                    {passwordConfirm &&
                    <Form.Text className="register-screen-div__form__warning-text">*Password and confirm password don't match</Form.Text>
                    }
                    
            
        </Form.Group>
        <Form.Group className="register-screen-div__form__nickname-grp">
            <Form.Label>Nickname:</Form.Label>
            <Form.Control placeholder="Enter display name"></Form.Control>
            {passwordNotFilled &&
            <Form.Text className="register-screen-div__form__warning-text">*Nickname cannot be empty</Form.Text>
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