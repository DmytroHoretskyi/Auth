import React, {useEffect, useRef, useState} from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    IconButton, InputAdornment,
    InputLabel, OutlinedInput,
    Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import UsersApiService from "../redux/services/userService";

export default function Login(){

    const dispatch = useDispatch();
    const userRef = useRef();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        userRef.current.focus()
    }, [])

    const navigate = useNavigate();
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleRegister = () => {
      navigate('/register')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await UsersApiService.LoginUser(dispatch, {user_email: user, user_password: password})
        navigate('/catalog')
    }
    const handleCatalog = () =>{
        navigate('/catalog')
    }

    return(
        <Box>
            <Card sx={{ minWidth: 275, maxWidth: 565, ml: 'auto', mr: 'auto', mt: 4 }}>
                <CardContent>
                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        Login
                    </Typography>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', mb: 3, width: '100%' }} variant="outlined">
                        <InputLabel >Login</InputLabel>
                        <OutlinedInput
                            label="login"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            reqired
                        />
                    </FormControl>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            reqired
                            type={values.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </CardContent>
                <CardActions sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Box>
                    <Button onClick={handleSubmit} sx={{minWidth: 255, mt: 2}} variant="outlined">login</Button>
                    <Button onClick={handleCatalog} sx={{minWidth: 255, mt: 2, ml: 0}} variant="outlined">catalog</Button>
                    <Typography onClick={handleRegister} variant='h6' sx={{mt:2,  textAlign: 'center'}} >Register</Typography>
                    </Box>
                </CardActions>

            </Card>
        </Box>
    )
}
