import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { database } from '../FirebaseConfig';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


function ForgotPassword() {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
        email: {
            value: email,
            isRequired: true,
            isEmail: true
        }
    });

    if (validator !== null) {
        setValidate({
            validate: validator.errors
        })

        isValid = false
    }
    return isValid;
}
      
      
      const auth=getAuth()
      const handleResetPassword = async () => {
        console.log("test")
        sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage('Password reset email sent. Please check your email.');
          console.log("test1")
          navigate("/Login");
          }) .catch((error) => {
        console.log("failed")
        setMessage(`Error: ${error.message}`);
        // ..
      });
    }
      

    return(
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 10, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <Box component="form" Validate onSubmit={handleResetPassword} sx={{ mt: 4 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                // autoComplete="email"
                onChange={event => setEmail(event.target.value)}
                autoFocus
              />
               <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>
              </Box>
              </Box>
              </Grid>
              </Grid>
              </ThemeProvider>
    )
}
export default ForgotPassword;