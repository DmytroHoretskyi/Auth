import {
    LOGIN_USER, LOGOUT_USER, REGISTER_USER,
} from "../actions/types";

const initialState = {
    user: [],
};

function productReducer(state = initialState, {type, payload} = {}) {
    if (type === LOGIN_USER) {
        console.log({User: payload})
        return {User: payload};
    }
    if (type === REGISTER_USER) {
        return {User: payload};
    }
    if (type === LOGOUT_USER) {
        return {User: {}};
    }
    return state;
}

export default productReducer;
