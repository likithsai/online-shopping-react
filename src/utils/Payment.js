//  Utils.js

import AppData from '../data/appdata.json';

const initiatePayment = (name, desc, img, amt, sucessHandler) => {
    let options = {
        "key": AppData.apiKey,
        "amount": amt * 100, // 2000 paise = INR 20, amount in paisa
        "currency": "INR",
        "name": name,
        "description": desc,
        "image": img,
        "handler": sucessHandler,
        // "prefill": {
        //   "name": "Harshil Mathur",
        //   "email": "harshil@razorpay.com"
        // },
        // "notes": {
        //   "address": "Payment confirmation"
        // },
        "theme": {
          "color": "#212529"
        }
    };
    
    let rzp = new window.Razorpay(options);
    rzp.open();
}

export default { initiatePayment };