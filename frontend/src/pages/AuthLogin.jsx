import { Card, Typography, Box, Checkbox, Button } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { login} from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
/////////////////////////////////////////////////////////////////////////////////////////importing from file
import googleIcon from "../assets/googleIcon.ico.png";
import { API_URI } from "../constants";
import Cookies from "js-cookie";

export default function AuthLogin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignin = async () => {
    setError("");
    try {
      const res = await axios.post(`${API_URI}/user/login`, {
        email: input.email,
        password: input.password,
      });
      if (res.status === 200) {
        const user_data = {
          email: res.data.email,
          name: res.data.name,
          isAdmin : res.data.isAdmin,
          user_id : res.data.user_id
        };
        localStorage.setItem("user_data", JSON.stringify(user_data));
        // CreateCookie("aki-tok" , res.token)
        console.log(res)
        Cookies.set("aki-tok", res.data.token ,{
          expires : 1,
          secure : true,
          path: '/'
      })
        dispatch(login());
        navigate('/')
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div>
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
            Log in
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: ".85rem", color: "#667085", textAlign: "center" }}
          >
            Welcome back! Please enter your details.
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
            <InputLabel sx={{ color: "black" }}>Email</InputLabel>
            <Input
              placeholder="JhonDoe@gmail.com"
              sx={{ marginBottom: "2em" }}
              name="email"
              onChange={handleInputChange}
            />
            <InputLabel sx={{ color: "black" }}>Password</InputLabel>
            <Input
              placeholder="password"
              name="password"
              onChange={handleInputChange}
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
          </Box>
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
          <Box
            className="login-checkbox-box"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: ".8rem",
              color: "black",
              padding: "1em",
              margin: "1em",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography sx={{ fontSize: ".8rem" }}>
                Remember for 30 days
              </Typography>
            </Box>
            <Button
              sx={{ fontSize: ".8rem", fontWeight: "700", color: "#6941C6" }}
            >
              Forgot Password
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "3em" }}
            onClick={handleSignin}
          >
            Sign in
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
          Sign in with Google
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ fontWeight: "bold" }} onClick={()=>{navigate('/signup')}}>Sign up or Register</Button>
        </Box>
      </Card>
    </div>
  );
}
