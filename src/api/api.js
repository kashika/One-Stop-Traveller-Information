const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',

};

export const getfeatureinfo = () =>
    fetch(`${api}/getfeatureinfo`,{
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