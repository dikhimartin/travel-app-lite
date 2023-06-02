import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Alert,
  Typography,
  Container
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Api from "../config/api"


const defaultTheme = createTheme();

export default function SignIn() {
  const api = new Api()
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let payload = {
        username: data.get('email'),
        password: data.get('password'),
      }
      let res = await api.post("/user/login", payload)
      let date = new Date()
      date.setTime(date.getTime() + res.data.expires_in)
      localStorage.setItem("ut", res.data.access_token, { expires: date })
    } catch (e) {
      showError(e);
    }    
  };

  const showError = (error) => {
    setErrorVisible(true);
    setErrorMsg(error.response.data.message); // Extract the error message from the response object
    setTimeout(() => {
      setErrorVisible(false);
    }, 3000); // Hide the error message after 3 seconds
  };  

  return (
    <>
      {errorVisible && (
        <Alert severity="error" onClose={() => setErrorVisible(false)} className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto">
          {errorMsg}
        </Alert>
      )}          
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}