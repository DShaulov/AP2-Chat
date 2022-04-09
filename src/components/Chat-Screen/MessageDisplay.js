import './Styles/MessageDisplay.css';
import { Container, Navbar, Image } from 'react-bootstrap';

function MessageDisplay(props) {
    return (
        <div className="MessageDisplay">
            <Navbar className="custom-navbar" variant="light" bg="light">
                <Image src={require(`../../userImages/${props.users[props.userChattingWith].profileImage}`)} className="custom-navbar__contact-image"></Image>
                <Navbar.Brand className="custom-navbar__contact-brand"><h5>{props.users[props.userChattingWith].displayName}</h5></Navbar.Brand>
                <p className="spacer">a</p>
            </Navbar>
            <div>

            </div>
            <Container>

            </Container>
        </div>
    );
}
export default MessageDisplay;