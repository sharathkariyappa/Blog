import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const createPost = () => {
    axios
      .post('/api/posts', { title, content })
      .then(() => navigate('/'))
      .catch((error) => console.error('Error creating post:', error));
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Paper elevation={3} style={styles.paper}>
        <Typography variant="h4" gutterBottom align="center" style={styles.heading}>
          Create New Post
        </Typography>
        <Box component="form" noValidate autoComplete="off" style={styles.form}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={createPost}
            fullWidth
            style={styles.submitButton}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  },
  paper: {
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    marginTop: '10px',
  },
  submitButton: {
    marginTop: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
  },
};

export default CreatePost;
