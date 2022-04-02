import './App.css';
import './components/Login-Screen/LoginScreen'
import LoginScreen from './components/Login-Screen/LoginScreen';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
