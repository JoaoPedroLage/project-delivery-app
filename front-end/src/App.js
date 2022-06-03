import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Navigate to="/login" replace /> }
      />
      <Route
        path="/login"
        element={ <LoginPage /> }
      />
      <Route
        path="/register"
        element={ <RegisterPage /> }
      />
    </Routes>
  );
}

export default App;
