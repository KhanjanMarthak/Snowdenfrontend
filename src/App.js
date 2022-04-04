// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SignupConsumer from './components/SignupConsumer';
import SignupProvider from './components/SignupProvider';
import ConsumerDashboard from "./components/ConsumerDashboard";
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';
import MapPage from "./components/MapFile";
import VendorDashboard from './components/VendorDashboard';
import VendorDashBoard from './components/VendorDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <PrivateRoute value={"/home"}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/map"
            element={
              <PrivateRoute value={"/dashboard/map"}>
                <MapPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/user"
            element={
              <PrivateRoute value={"/dashboard/user"}>
                <ConsumerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/provider"
            element={
              <PrivateRoute value={"/dashboard/provider"}>
                <VendorDashboard />
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
          <Route
            path="/home"
            element={
              <PrivateRoute value={"/home"}>
                <LoginPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <ConsumerDashboard /> */}
      {/* <SignupConsumer/>
      <SignupProvider />
      <Login />
      <HomePage/> */}
    </div >
  );
}

export default App;
