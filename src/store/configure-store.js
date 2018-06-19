import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './../reducers'
import rootSaga from './../sagas'
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    let persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}

