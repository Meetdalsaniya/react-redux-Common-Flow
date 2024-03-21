/* eslint-disable */
/* 

============ Basic Setup ============ 
*/
import {

    USER_CREATE_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
} from '../constant/index';
import axios from 'axios';

/* 
 
======= Header Configuration =======
 
*/
const BASE_URL = process.env.NEXT_PUBLIC_API;
let tokenData;
if (typeof window !== 'undefined') {
    // Access localStorage here
    tokenData = localStorage.getItem('x-access-token')
        ? localStorage.getItem('x-access-token')
        : null;
}
const formHeader = {
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${tokenData}`,
    },
};
const headerConfig = {
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${tokenData}`,
    },
};

/* 
============ API Calling ===============
type: API Type will be called in Reducer  
*/


export const createUser = (userData) => async (dispatch) => {
    console.log("🚀 ~ createUser ~ userData:", userData)
    try {
        debugger
        dispatch({ type: USER_CREATE_REQUEST });
        const { data } = await axios.post(`http://172.16.16.185:2010/api/employee/create`, userData.payload);

        dispatch({ type: USER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        debugger
        dispatch({
            type: USER_CREATE_FAIL,
            payload: error?.response?.data?.message ? error?.response?.data?.message : error?.message,
        });
    }
};
