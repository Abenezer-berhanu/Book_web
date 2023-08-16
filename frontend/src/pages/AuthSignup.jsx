import { Card, Typography, Box, Button } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
/////////////////////////////////////////////////////////////////////////////////////////importing from file
import googleIcon from "../assets/googleIcon.ico.png";

export default function AuthSignup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            Sign up
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: ".85rem", color: "#667085", textAlign: "center" }}
          >
            Welcome! Please enter your details.
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: ".85rem", color: "#667085", textAlign: "center" }}
          >
            Please login after signing up
          </Typography>
          <hr />
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
            <Input placeholder="Jhon Doe" sx={{ marginBottom: "2em" }} />
            <InputLabel sx={{ color: "black" }}>Email*</InputLabel>
            <Input
              placeholder="JhonDoe@gmail.com"
              sx={{ marginBottom: "2em" }}
            />
            <InputLabel sx={{ color: "black" }}>Password*</InputLabel>
            <Input
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
          </Box>
          <Box
            sx={{
              margin: "1rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginLeft: "10%",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: ".85rem",
                color: "#667085",
                textAlign: "center",
                display: "block",
                paddingTop: ".3em",
              }}
            >
              Must be at least 8 char.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: ".85rem",
                color: "#667085",
                textAlign: "center",
                display: "block",
                paddingTop: ".3em",
              }}
            >
              Must have at least 1 special char.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: ".85rem",
                color: "#667085",
                textAlign: "center",
                display: "block",
                paddingTop: ".3em",
              }}
            >
              Must have at least 1 capital latter.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: ".85rem",
                color: "#667085",
                textAlign: "center",
                display: "block",
                paddingTop: ".3em",
              }}
            >
              must have at least 1 small latter
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: ".85rem",
                color: "#667085",
                textAlign: "center",
                display: "block",
                paddingTop: ".3em",
              }}
            >
              must have at least 1 number
            </Typography>
          </Box>

          <Button variant="contained" sx={{ width: "100%", height: "3em" }}>
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
          <Button sx={{ fontWeight: "bold" }}>Sigin or login</Button>
        </Box>
      </Card>
    </div>
  );
}
