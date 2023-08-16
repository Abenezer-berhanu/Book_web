import { Card, Typography, Box, Checkbox, Button } from "@mui/material";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
/////////////////////////////////////////////////////////////////////////////////////////importing from file
import googleIcon from '../assets/googleIcon.ico.png'

export default function AuthLogin() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
return (
    <div>
      <Card sx={{maxWidth: "450px",minWidth : "250px", margin: '2em auto', padding:'1em'}}>
        <Box sx={{ display: 'flex', flexDirection:'column', gap: '.7em', marginBottom: '2em'}}>
        <Typography sx={{color: '#101828', fontSize : '1.8rem' , fontWeight:'600', textAlign: 'center'}}>Log in</Typography>
        <Typography variant="p" sx={{ fontSize : '.85rem', color: '#667085', textAlign: 'center'}}>Welcome back! Please enter your details.</Typography>
        </Box>
        <form>
        <Box sx={{ width : '80%', display: 'flex', flexDirection: 'column', margin:'auto'}}>
        <InputLabel  sx={{color: 'black'}}>Email</InputLabel>
          <Input placeholder="JhonDoe@gmail.com" sx={{ marginBottom: '2em'}}/>
          <InputLabel sx={{color: 'black'}}>Password</InputLabel>
          <Input
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
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
        <Box className='login-checkbox-box' sx={{display: "flex" ,justifyContent:'space-between', fontSize: '.8rem', color: 'black', padding:'1em' , margin: '1em'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Checkbox/>
        <Typography sx={{fontSize:'.8rem'}}>Remember for 30 days</Typography>
        </Box>
        <Button sx={{fontSize: '.8rem',fontWeight: '700', color:'#6941C6'}}>Forgot Password</Button>
        </Box>
        <Button  variant="contained" sx={{ width: '100%', height:'3em'}}>Sign in</Button>
        </form>
        <Button variant="outlined" sx={{ width: '100%', height:'3em',margin: '1em auto' }}><img src={googleIcon} alt="" style={{width: '25px', margin:'0 .5em'}}/>Sign in with Google</Button>
        <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
          <Button sx={{ fontWeight:'bold'}}>Sign up or Register</Button>
        </Box>
      </Card>
    </div>
  )
}
