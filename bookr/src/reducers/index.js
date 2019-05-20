import { SIGNUP_START, SIGNUP_FAIL, SIGNUP_SUCCESS,
LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
GETBOOKS_START, GETBOOKS_SUCCESS, GETBOOKS_FAIL,
FETCHBOOK_START, FETCHBOOK_SUCCESS, FETCHBOOK_FAIL } from "../actions";

const initialState = {
    books : [],
    users : [],
    member : {},
    activeBook : {},
    error : "",
    signingUp : false,
    logginIn : false,
    gettingBooks : false,
    fetchingBook: false,
    token : ""

}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
//-------SIGNUP---------//
        case SIGNUP_START:
            return {
                ...state,
                signingUp : true, 
                error : ''
            }
        case SIGNUP_SUCCESS:
            console.log(action.payload, action.token)
            return {
                ...state,
                signingUp : false,
                users : action.payload,
                member : action.payload[action.payload.length-1],
                token : action.token
            }
        case SIGNUP_FAIL:
            console.log(action.payload)
            return {
                ...state,
                signingUp : false,
                error : action.payload
            }

//-------LOGIN---------//
        case LOGIN_START:
            return {
                ...state,
                logginIn : true,
                error : "",
            }
        case LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                logginIn : false,
                token : action.payload
            }
        case LOGIN_FAIL:
            console.log(action.payload)
            return {
                ...state,
                logginIn : false,
                error : action.payload
            }

//-------GETBOOKS---------//
        case GETBOOKS_START:  
            return {
                ...state,
                gettingBooks : true,
                error: ""
            }
        case GETBOOKS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                gettingBooks : false,
                books : action.payload
            }
        case GETBOOKS_FAIL:
            console.log(action.payload)
            return {
                ...state,
                gettingBooks : false,
                error : action.payload
            }
//--------FETCHBOOK-------//
         case FETCHBOOK_START:
            return {
                ...state,
                fetchingBook : true,
                error:""
            }
         case FETCHBOOK_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                fetchingBook : false,
                activeBook : action.payload
            }
         case FETCHBOOK_FAIL:   
            console.log(action.payload)
            return {
                ...state,
                retchingBook : false,
                error : action.payload
            }

        default:
            return state
    }
}


export default reducer;