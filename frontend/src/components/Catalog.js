import React from 'react'
import {
    Box, Button, Card, CardActions,
    CardContent,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import UsersApiService from "../redux/services/userService";

export default function Catalog(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector(
        (state) => state.productReducer.User
    );
    const handleLogout = () => {
        UsersApiService.LogoutUser(dispatch)
        navigate('/login')
    }

    return(
        <Box>
            <Card sx={{ minWidth: 275, maxWidth: 565, ml: 'auto', mr: 'auto', mt: 4 }}>
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', m: 'auto'}}></Box>
                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        {User.user_name}
                    </Typography>
                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        Email: {User.user_email}
                    </Typography>
                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        Birth date: {new Date(User.user_birthdate).toLocaleDateString() }
                    </Typography>
                    <Typography sx={{ textAlign: "center", fontSize: 25 }} color="text.primary" gutterBottom>
                        Country: {User.user_country}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                    <Button onClick={handleLogout} sx={{minWidth: 255, mr: 'auto', ml: 'auto'}} variant="outlined">Logout</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
