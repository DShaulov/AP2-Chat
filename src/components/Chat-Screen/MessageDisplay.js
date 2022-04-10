import './Styles/MessageDisplay.css';
import { useState } from 'react';
import { ListGroup, Navbar, Image, Button, Form, Popover, Overlay, OverlayTrigger } from 'react-bootstrap';
import { Paperclip, ArrowRightCircle, Mic, Camera, CameraVideo } from 'react-bootstrap-icons';

function MessageDisplay(props) {
    const date = new Date();
    /**
     * Sends a message to another use
     */
    function sendTextMessage(event) {
        event.preventDefault();
        let updatedMessages = {...props.messages};
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'TEXT',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: event.target[0].value
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'TEXT',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: event.target[0].value
            }
        );
        event.target[0].value = '';
        props.functions.updateMessages(updatedMessages);
    };
    /**
     * Returns current date in dd/mm/yy format
     */
    function parseDate() {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = String(date.getFullYear());
        return day + '/' + month + '/' + year;
    }
    /**
     * Returns current time in minutes:hours format
     */
    function parseTime() {
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        return hours + ':' + minutes;
    }
    /**
     * Builds DOM elements out of messages
     */
    function buildMessages() {
        let messageId = 0;
        let messageList = [];
        for (const message of props.messages[props.currentUser][props.userChattingWith]) {
            if (message.type === 'TEXT') {
                let className = '';
                if (message.direction === 'TO') {
                    className = 'chat-bubble-to';
                    messageList.push(
                        <div className="chat-bubble-container" key={messageId}>
                            <time className="to-message-timestamp">{message.time}</time>
                            <div className={className} >
                                <p className="text-message-paragraph">{message.content}</p>
                            </div>
                        </div>
                        
                    )
                    messageId++;
                }
                else {
                    className = 'chat-bubble-from';
                    messageList.push(
                        <div className="chat-bubble-container">
                            <div className={className} key={messageId}>
                                <p className="text-message-paragraph">{message.content}</p>
                            </div>
                            <time className="from-message-timestamp">{message.time}</time>
                        </div>
                        
                    )
                    messageId++;
                }
                
            }
            
        }
        return messageList;
    }
    const popover = (
        <Popover>
            <Popover.Header>
                Attach
            </Popover.Header>
            <Popover.Body>
                <ListGroup horizontal>
                    <ListGroup.Item action>
                        <Mic/>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <CameraVideo/>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <Camera/>
                    </ListGroup.Item>
                </ListGroup>
            </Popover.Body>
        </Popover>
    );
    return (
        <div className="MessageDisplay">
            <Navbar className="custom-navbar" variant="light" bg="light">
                <Image src={require(`../../userImages/${props.users[props.userChattingWith].profileImage}`)} className="custom-navbar__contact-image"></Image>
                <Navbar.Brand className="custom-navbar__contact-brand"><h5>{props.users[props.userChattingWith].displayName}</h5></Navbar.Brand>
                <p className="spacer">a</p>
            </Navbar>
            <div className="messages-div">
                {buildMessages()}
            </div>
            <Navbar className="custom-footer" variant="light" bg="light">
                <OverlayTrigger trigger="click" placement='top' overlay={popover} rootClose='true'>
                    <Button>
                        <Paperclip></Paperclip>
                    </Button>
                </OverlayTrigger>
                <Form className="custom-footer__custom-form" onSubmit={sendTextMessage}>
                    <Form.Group className="custom-footer__custom-form__custom-grp">
                        <Form.Control placeholder="Enter message" className="custom-footer__custom-form__custom-grp__custom-control"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            <ArrowRightCircle/>
                        </Button>
                    </Form.Group>
                </Form>
            </Navbar>
        </div>
    );
}
export default MessageDisplay;