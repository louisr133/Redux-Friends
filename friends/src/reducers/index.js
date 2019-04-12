import {LOGGING, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, FETCH_DATA_FAIL, FETCH_DATA_START, FETCH_DATA_SUCCESS, DELETED,DELETE_FAILED,DELETING, UPDATED,UPDATE_FAIL,UPDATING, FRIENDUPDATE} from '../actions'

const initialState = {
    updateField: {
        name: '',
        age: '',
        email: '',
        id: '',
    },
    loginField: {
        username: '',
        password: '',
    },
    isFetching: false,
    isLogging: false,
    logErr: '',
    data: [],
}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case LOGGING:
            return ({
                ...state,
                loginField: {
                    ...state.loginField,
                    [action.payload.target.name]: action.payload.target.value
                }
            })
        case LOGIN_START: 
            return({
                ...state,
                isLogging: true,
            })
        case LOGIN_SUCCESS:
            return({
                ...state,
                token: action.payload,
                isLogging: false,

            })
        case LOGIN_FAIL:
            return ({
                ...state,
                isLogging: false,
                logErr: action.payload
            })
        case FETCH_DATA_START:
            return({
                ...state,
                isFetching: true,
                
            })
        case FETCH_DATA_SUCCESS:
            return({
                ...state,
                data: action.payload,
                isFetching: false,
                
            })
        case FETCH_DATA_FAIL:
            return({
                ...state,
                isFetching: false,
                err: action.payload
                
            })
        case DELETING:
            return({
                ...state,
                isDeleting: true,
            })
        case DELETED:
            return({
                ...state,
                data: action.payload,
                isDeleting: false,
            })
        case DELETE_FAILED:
            return({
                ...state,
                err: action.payload,
                isDeleting: false,
            })

            case UPDATING:
            return({
                ...state,
                isUpdating: true,
            })
        case UPDATED:
            return({
                ...state,
                data: action.payload,
                isUpdating: false,
            })
        case UPDATE_FAIL:
            return({
                ...state,
                err: action.payload,
                isUpdating: false,
            })
        case FRIENDUPDATE:
            return({
                ...state,
                updateField: {
                    ...state.updateField,
                    [action.payload.target.name]: action.payload.target.value,
                }
            })
        default:
            return({
                ...state,
            });
    }

}
