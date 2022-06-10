import axios from "./http-common";
import {
    LoginAction,
    LogoutAction,
    RegisterUserAction,


} from "../actions/userActions";

const LoginUser = async (dispatch, {user_email, user_password}) => {
    const response = await axios.post("/auth/login", {user_email, user_password});
    dispatch(LoginAction(response.data));
};
const RegisterUser = async (dispatch, {user_name,user_email,user_password, user_birthdate, user_country, user_isagreed}) => {
   const response = await axios.post("/users",{user_name,user_email,user_password, user_birthdate, user_country, user_isagreed})
    dispatch(RegisterUserAction(response.data))
}
const LogoutUser = async (dispatch) => {
    dispatch(LogoutAction())
}


const UsersApiService = {
    LoginUser,
    RegisterUser,
    LogoutUser
}
export default UsersApiService;
