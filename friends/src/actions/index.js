import axios from 'axios'

import axiosWithAuth from '../utils/axiosAuth';

//Authentication
export const LOGGING = 'LOGGING';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const loginChange = (e) => {
    return({
        type: LOGGING,
        payload: e,
    })
}

export const attemptLogin = loginField => dispatch => {
    dispatch({
        type: LOGIN_START,
    })

    return axios
    .post('http://localhost:5000/api/login' , loginField)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        console.log(res.data.payload)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.payload,
        })
    })
    .catch(err => dispatch({
        type: LOGIN_FAIL,
    }))
}

//Getting Data

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS =  'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export const getData = () => dispatch => {
    dispatch({
        type: FETCH_DATA_START
    })

    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => dispatch({
        type: FETCH_DATA_FAIL,
        payload: err
    }));

}

//Delete Data

export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const DELETE_FAILED = "DELETE_FAILED";

export const deleteData = (id) => dispatch => {
    dispatch({
        type: DELETING,
    })

    axiosWithAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
        dispatch({
            type: DELETED,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: DELETE_FAILED,
            payload: err,
        })
    })
}

export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const UPDATE_FAIL = "UPDATE_FAIL";


export const updateFriend = (updated) => dispatch => {
    dispatch({
        type: UPDATING,
    })

    axiosWithAuth()
    .put(`http://localhost:5000/api/friends/${updated.id}`, updated)
    .then(res => {
        dispatch({
            type: UPDATED,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: UPDATE_FAIL,
            payload: err,
        })
    })


}

//Updateing 

export const FRIENDUPDATE = 'FRIENDUPDATE';

export const updateFriendField = (e) => {
    return({
        type: FRIENDUPDATE,
        payload: e,
    })
}