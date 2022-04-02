import logo from './logo.svg';
import './App.css';
import SignupProvider from './components/SignupProvider';
import SignupConsumer from './components/SignupConsumer';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
// import Signup from './components/Signup';
// import LoginPage from "./components/LoginPage";
// import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      {/* <SignupConsumer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <PrivateRoute  value={"/home"}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateRoute value={"/signup"}>
                <Signup />
              </PrivateRoute>
            }
          />
           <Route
            path="/login"
            element={
              <PrivateRoute value={"/login"}>
                <LoginPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter> */}
      <SignupProvider/>
      <SignupConsumer/>
    </div>
  );
}

export default App;
