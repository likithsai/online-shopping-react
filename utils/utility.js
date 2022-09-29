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

export default { fetchData };