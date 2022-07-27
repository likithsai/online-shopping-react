//  Utils.js

import AppData from '../data/appdata.json';
import MD5 from "crypto-js/md5";

const initiatePayment = (name, desc, img, amt, sucessHandler) => {
    let options = {
        "key": AppData.apiKey,
        "amount": amt * 100, // 2000 paise = INR 20, amount in paisa
        "currency": AppData.baseCurrency,
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
    rzp.on('payment.failed', function (response){
        // alert(response.error.code);
        alert("Error code: " + response.error.code + "\nError Desc: " + response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
    });
    rzp.open();
}

export default { initiatePayment };