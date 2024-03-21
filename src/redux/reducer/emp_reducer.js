/* eslint-disable */
import {
    USER_CREATE_REQUEST,
    USER_CREATE_FAIL,
    USER_CREATE_SUCCESS,
} from '../constant/index';

export const empReducer = (state = "", action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case USER_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                create_Data: action.payload,
            }; case USER_CREATE_FAIL:
            return {
                ...state,
                isLoading: false,
                create_user_error: action.payload,
            };
        default:
            return state;
    }
};
