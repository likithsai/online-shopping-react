import '../styles/app.scss';
import { wrapper, store } from '../store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    //  load bootstrap bundler js
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
