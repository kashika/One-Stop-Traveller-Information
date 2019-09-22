
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',

};

// This is sample API.

export const doLogin = (payload) =>
    fetch(`${api}/mongoCalls/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    }).then((res) => res.json())
        .then((data) => {
            const token = data.token;
            localStorage.setItem('jwtToken', token);
            console.log(token);
            return data;})
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const logout = (userId) =>
    fetch(`${api}/mongoCalls/logout`,{
        method: 'POST',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userId)
    }).then((res) => res.json())
        .then((data) => {
            return data;
        }).catch(error=> {
        console.log("This is error" +error);
        return error;
    });


export const checkSession = () =>
    fetch(`${api}/users/redirectToHomepage`,{
        method: 'GET',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        }).catch(error=> {
        console.log("This is error");
        return error;
    });

export const saveData = (details) =>
    fetch(`${api}/mongoCalls/signup_mongodb`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(details)
    }).then((res) => res.json())
        .then((data) => {return data;})
        .catch(error => {
            console.log("This is error");
            return error;
        });

