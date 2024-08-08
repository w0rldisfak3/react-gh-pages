import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Typography variant="h5" component="h2" className="login-title">
        Connexion
      </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          fullWidth 
          variant="contained" 
          color="primary" 
          type="submit"
          className="login-button"
        >
          Login
        </Button>
      </form>
      <Link href="#" variant="body2" className="forgot-password-link">
        Forgot password?
      </Link>
    </Container>
  );
}

export default Login;
