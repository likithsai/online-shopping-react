/* eslint-disable import/no-anonymous-default-export */
//  payment.js

const fetchData = async(url, params, callback) => {
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    };

    const response = await fetch(url, settings);
    const data = await response.json();

    callback(data);
}

const fetchDataFromServer = async(url, callback) => {
    await fetch('/api/products').then((response) => response.json()).then((res) => callback(res));
}

export default { fetchData, fetchDataFromServer };