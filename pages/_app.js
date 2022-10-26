import React from 'react';
import Layout from '../components/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
};

export default MyApp;