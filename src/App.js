import logo from './logo.svg';
import './App.css';
//import SignupProvider from './components/SignupProvider';
import SignupConsumer from './components/SignupConsumer';
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <SignupConsumer/>
      <LoginPage />
      <HomePage/>
    </div>
  );
}

export default App;
