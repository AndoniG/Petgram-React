import React, { createContext, useContext, useReducer } from 'react'


const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

function getToken() {
    try {
        const token = window.sessionStorage.getItem('token');
        return (token) ? true : false
    } catch (e) {
        return false
    }
}

export const initialState = {
    loggedIn: getToken(),
    token: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'loggedIn':
            window.sessionStorage.setItem('token', action.token)
            return {
                ...state,
                token: action.token,
                loggedIn: true
            };
        case 'logout':
            window.sessionStorage.removeItem('token')
            return {
                ...state,
                token: null,
                loggedIn: false
            };
        default:
            return state;
    }
}