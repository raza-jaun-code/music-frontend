import { backendURL } from './config';


function getCookieValueByName(name) {
    let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : "";
}

const token = getCookieValueByName("token");

export const makeUnAuthorizedPostRequest = async (path, body) =>{
    const response = await fetch(backendURL+path,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const makeAuthorizedPostRequest = async (path, body) => {
    const response = await fetch(backendURL+path,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthorizedGetRequest = async (path) => {
    const response = await fetch(backendURL+path,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}