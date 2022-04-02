import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Signup/>
      <LoginPage />
      <HomePage/>
    </div>
  );
}

export default App;
