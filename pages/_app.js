import '../styles/app.scss';
import { wrapper, store } from '../store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
// import dotenv from 'dotenv';

// dotenv.config();

function MyApp({ Component, pageProps }) {
    
    useEffect(() => {
        // add razorpay payment library
        // const URL = "https://checkout.razorpay.com/v1/checkout.js"
        const URL = process.env.NEXT_PUBLIC_RAZORPAYURL;
        const script = document.createElement("script");
        script.crossOrigin = 'anonymous';
        script.type = 'text/javascript';
        script.src = URL;
        script.async = true;
        document.body.appendChild(script);

        //  Include bootstrap JS library
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
