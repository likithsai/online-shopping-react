//  payment.js

const importRozorpayLib = () => {
    const URL = "https://checkout.razorpay.com/v1/checkout.js"
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = URL;
    script.async = true;
    document.body.appendChild(script);
}

export default { importRozorpayLib };