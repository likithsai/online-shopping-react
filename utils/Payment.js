//  razorpay payment 

const initiatePayment = (name, personName, personEmail, desc, img, amt, sucessHandler) => {
    let options = {
        "key": process.env.NEXT_PUBLIC_APIKEY,
        "amount": amt * 100, // 2000 paise = INR 20, amount in paisa
        "currency": process.env.NEXT_PUBLIC_DEFAULTBASECURRENCY,
        "name": name,
        "description": desc,
        "image": img,
        "handler": sucessHandler,
        "prefill": {
          "name": personName,
          "email": personEmail
        },
        "notes": {
          "address": "Payment confirmation"
        },
        "theme": {
          "color": "#212529"
        }
    };
    
    let rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
        alert("Error code: " + response.error.code + "\nError Desc: " + response.error.description);
    });
    rzp.open();
}

export default { initiatePayment };