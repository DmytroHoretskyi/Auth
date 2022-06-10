import React, {useEffect, useRef, useState} from "react"
import {
    Box, Button, Card, CardActions,
    CardContent, Checkbox,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel, MenuItem,
    OutlinedInput, Select, TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import UsersApiService from "../redux/services/userService";

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRef = useRef();
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [birthdate, setUserBirthdate] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [agree, setAgree] = useState(false);
    const [uniqueError, setUniqueError] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const User = useSelector(
        (state) => state.productReducer.User
    );
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    useEffect(() => {
        userRef.current.focus()
    }, [])


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
        navigate('/login')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        if (userEmail && userName && birthdate && userCountry && password && agree) {
            setUniqueError(true)
            await UsersApiService.RegisterUser(dispatch, {
                user_name: userName,
                user_email: userEmail,
                user_password: password,
                user_birthdate: birthdate,
                user_country: userCountry,
                user_isagreed: agree
            })
            navigate('/catalog')
        }else {
            setError(true)
        }
    }
    const handleAgree = () =>{
        setAgree(!agree)
    }

    const handleChange = (event) => {
        setUserCountry(event.target.value);
    };
    const handleBirthdate = (event) =>{
        setUserBirthdate(event.target.value)
        console.log(birthdate)
    }

    return (
        <Box>
            <Card sx={{ minWidth: 275, maxWidth: 565, ml: 'auto', mr: 'auto', mt: 4 }}>
                <CardContent>
                    {uniqueError ? <Typography sx={{ textAlign: "center", fontSize: 25, color: 'red' }} >Your name or email already using</Typography> : null}
                    {error ? <Typography sx={{ textAlign: "center", fontSize: 25, color: 'red' }} >Please fill all fields</Typography> : null}

                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        Login
                    </Typography>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', mb: 3, width: '100%' }} variant="outlined">
                        <InputLabel >Email</InputLabel>
                        <OutlinedInput
                            label="Email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserEmail(e.target.value)}
                            value={userEmail}
                            reqired
                        />
                    </FormControl>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', mb: 3, width: '100%' }} variant="outlined">
                        <InputLabel >Name</InputLabel>
                        <OutlinedInput
                            label="Name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            reqired
                        />
                    </FormControl>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', mb: 3, width: '100%' }} variant="outlined">
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            value={birthdate}
                            onChange={handleBirthdate}
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ mr: 'auto', ml: 'auto', mb: 3, width: '100%' }} variant="outlined">
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={userCountry}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Ukraine'}>Ukraine</MenuItem>
                            <MenuItem value={'USA'}>USA</MenuItem>
                            <MenuItem value={'Italy'}>Italy</MenuItem>
                        </Select>
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
                    <Box sx={{display: 'flex', flexDirection: 'raw'}}>
                        <Typography variant='h6' sx={{mt: 2}}>I agree with the rules</Typography>
                        <Checkbox onClick={handleAgree} sx={{mt: '12px'}} {...label} />
                    </Box>
                </CardContent>
                <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                    <Button onClick={handleSubmit} sx={{minWidth: 255, mr: 'auto', ml: 'auto'}} variant="outlined">Register</Button>
                    <Typography onClick={handleRegister} variant='h6' sx={{ m: 2, textAlign: 'center'}} >Login</Typography>
                </CardActions>

            </Card>
        </Box>
    )
}
