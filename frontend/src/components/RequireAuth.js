import {useLocation, Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const RequireAuth = () => {
    const user = useSelector(
        (state) => state.productReducer.User
    );
    const location = useLocation();

    return(
        user?.accessToken
        ? <Outlet /> :
            <Navigate to="/login" state={{from: location}} replace />
    );
}
export default RequireAuth;
