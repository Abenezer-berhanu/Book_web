import { Card, Typography, Box, Button, Stack } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Alert from '@mui/material/Alert';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/////////////////////////////////////////////////////////////////////////////////////////importing from file
import googleIcon from "../assets/googleIcon.ico.png";
import { API_URI } from "../constants";

export default function AuthSignup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordRequirement, setPasswordRequirement] = React.useState(false);
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const reqStyle = {
    fontSize: ".85rem",
    color: "#667085",
    textAlign: "center",
    display: "block",
    paddingTop: ".3em",
  };

  const [error, setError] = React.useState("");

  const [showAlert, setShowAlert] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignupInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "password") {
      setPasswordRequirement(true);
    }
  };

  const handleSignup = async() => {
    setError("");
    try {
      const res = await axios.post(`${API_URI}/user/signup`, {
        name : input.name,
        email : input.email,
        password : input.password
      })
      if(res.status === 201){
        setShowAlert(true)
        {setTimeout(()=>{
          setShowAlert(false)
          navigate('/login')
        },3000)}
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      {showAlert && <Alert severity="success" sx={{margin : 'auto', maxWidth : '400px' , width : '50%'}}>You're successfully registered please login/signin</Alert>}
      <Card
        sx={{
          maxWidth: "450px",
          minWidth: "250px",
          margin: "2em auto",
          padding: "1em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".7em",
            marginBottom: "2em",
          }}
        >
          <Typography
            sx={{
              color: "#101828",
              fontSize: "1.8rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Sign up
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: ".85rem", color: "#667085", textAlign: "center" }}
          >
            Welcome! Please enter your details.
            <br />
            Please login after sign up
          </Typography>
        </Box>
        <form>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <InputLabel sx={{ color: "black" }}>Name*</InputLabel>
            <Input
              onChange={handleSignupInput}
              placeholder="Jhon Doe"
              sx={{ marginBottom: "2em" }}
              name="name"
            />
            <InputLabel sx={{ color: "black" }}>Email*</InputLabel>
            <Input
              onChange={handleSignupInput}
              placeholder="JhonDoe@gmail.com"
              sx={{ marginBottom: "2em" }}
              name="email"
            />
            <InputLabel sx={{ color: "black" }}>Password*</InputLabel>
            <Input
              onChange={handleSignupInput}
              name="password"
              placeholder="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error && (
            <div
              style={{
                margin: " 2em auto",
                border: "2px solid red",
                width: "fit-content",
                padding: "15px",
                borderRadius: "5px",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              <p>{error}</p>
            </div>
          )}
          </Box>
          {passwordRequirement && (
            <Stack spacing={0.3} sx={{ margin: "1em 0" }}>
              <Typography variant="p" sx={reqStyle}>
                Must be at least 8 char.
              </Typography>
              <Typography variant="p" sx={reqStyle}>
                Must have at least 1 special char.
              </Typography>
              <Typography variant="p" sx={reqStyle}>
                Must have at least 1 capital latter.
              </Typography>
              <Typography variant="p" sx={reqStyle}>
                must have at least 1 small latter
              </Typography>
              <Typography variant="p" sx={reqStyle}>
                must have at least 1 number
              </Typography>
            </Stack>
          )}

          <Button
            variant="contained"
            sx={{ width: "100%", height: "3em", marginTop: "1em" }}
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </form>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "3em", margin: "1em auto" }}
        >
          <img
            src={googleIcon}
            alt=""
            style={{ width: "25px", margin: "0 .5em" }}
          />
          Sign up with Google
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ fontWeight: "bold" }} onClick={()=>{navigate("/login")}}>
            Sigin or login
          </Button>
        </Box>
      </Card>
    </div>
  );
}
