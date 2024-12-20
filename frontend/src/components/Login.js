import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Link,
} from '@mui/material';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log('Login Success:', values);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={styles.grid}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" align="center" style={styles.title}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            style={styles.form}
          >
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
              style={styles.textField}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="password"
              style={styles.textField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={styles.submitButton}
            >
              Log in
            </Button>
            <Box mt={2} display="flex" justifyContent="center">
              <Link href="#" underline="hover" style={styles.link}>
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

const styles = {
  grid: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  },
  paper: {
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  form: {
    marginTop: '10px',
  },
  textField: {
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc', // Default border
      },
      '&:hover fieldset': {
        borderColor: '#1890ff', // Blue border on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1976d2', // Darker blue border when focused
      },
    },
  },
  submitButton: {
    marginTop: '20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#005bb5',
    },
  },
  link: {
    color: '#1976d2',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default Login;
