import React from 'react';
import Login from './Login';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from React Router

function App() {
  return (<HashRouter > {/* Wrap the entire application with BrowserRouter */}
  <Routes> {/* Define the routes using the Routes component */}
    <Route path="/" element={<Login />} /> {/* Render Login component for '/login' path */}
  </Routes>
</HashRouter >)
}

export default App;
