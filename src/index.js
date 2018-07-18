import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure-store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { MuiThemeProvider } from '@material-ui/core/styles/index';
import theme from './theme';

import 'polyfills';

const { store, persistor } = configureStore();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
