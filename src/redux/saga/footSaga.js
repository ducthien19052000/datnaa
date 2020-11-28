import { all } from 'redux-saga/effects';
import watchCategorySagaGetdata from './categorySaga';
import watchFoodSagaGetdata from './foodSaga';
import watchUserSagaGetData from './userSaga';
import watchInvoiceSagaGetData from './invoiceSaga'


function* rootSaga() {
    yield all([
        watchFoodSagaGetdata(),
        watchCategorySagaGetdata(),
        watchUserSagaGetData(),
        watchInvoiceSagaGetData()
    ]
    )
};
export default rootSaga;
