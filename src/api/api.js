const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',

};

export const getfeatureinfo = (star) =>
    fetch(`${api}/getfeatureinfo/${star}`,{
        method: 'GET',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Request to server from getfeatureinfo(): ", star);
            console.log("Response from server to getfeatureinfo(): ", data);
            return data;
        }).catch(error=> {
        console.log("This is error");
        return error;
    });