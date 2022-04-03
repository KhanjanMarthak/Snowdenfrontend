import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SignupConsumer from './components/SignupConsumer';
import SignupProvider from './components/SignupProvider';
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
            path="/signup/user"
            element={
              <PrivateRoute value={"/signup/user"}>
                <SignupConsumer />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup/vendor"
            element={
              <PrivateRoute value={"/signup/vendor"}>
                <SignupProvider />
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
      </BrowserRouter> 
      {/* <SignupConsumer/>
      <SignupProvider />
      <Login />
      <HomePage/> */}
    </div>
  );
}

export default App;
