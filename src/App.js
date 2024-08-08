import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from React Router

function App() {
  return (<BrowserRouter> {/* Wrap the entire application with BrowserRouter */}
  <Routes> {/* Define the routes using the Routes component */}
    <Route path="/" element={<Login />} /> {/* Render Login component for '/login' path */}
  </Routes>
</BrowserRouter>)
}

export default App;
