import {applyMiddleware, createStore, compose} from  'redux'
import createSagaMiddleware from  "redux-saga"
import rootReducer from '../reducers/index'
import rootSaga from '../saga/footSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleware.run(rootSaga)
export default store;