export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const auth = (tokenID, userID) => {
    return{
        type: AUTHENTICATE,
        payload: {
            tokenID,
            userID
        }
    }
}

export const logOut = () => {
    return{
        type: LOGOUT
    }
}