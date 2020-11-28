import { ActionType, addDataSuccess, deleteDataSuccess, editDataSuccess, getDataGroupSuccess, getDataSuccess } from '../Action/index'
import { fork, put, take, takeLatest } from 'redux-saga/effects'

function* fetchListFood() {
    while (true) {
        yield take(ActionType.GET_DATA)
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/product/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })

        })
        const resp = yield requestGet.json();
        console.log(resp)
        yield put(getDataSuccess(resp.body.content));

    }

}

function* fetchListFoodGroup(id) {
    try {
      
        
        const respone = yield fetch(`https://website-fpoly-food.herokuapp.com/product/?productName=&status=&categoryId=${id.payload.id}&size=4&page=${id.payload.page}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                
               

            }),

        })
        const res = yield respone.json();
        console.log(res)
        yield put(getDataGroupSuccess(res.body.content));
    } catch (error) {
        // console.log(error);
    }

}
function* SagaAddData(data){
    console.log('add data',data.payload);
    try {
        const requestAdd = yield fetch(`http://website-fpoly-food.herokuapp.com/product/`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            }),
            body: JSON.stringify(data.payload)
        })
        const responeAdd = yield requestAdd.json();
        console.log(responeAdd);
        yield put (addDataSuccess(responeAdd));
    } catch (error) {
        console.log(error)
    }
}
function * SagaDeleteData(id){
    console.log(id.payload);
    try {
        const requestDelete = yield fetch(`http://website-fpoly-food.herokuapp.com/product/${id.payload}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
                
            })
        })
        const responeDelete = yield requestDelete.json();
        console.log(responeDelete);
        yield put (deleteDataSuccess(responeDelete));
    } catch (error) {
        console.log(error);
    }
}

function* SagaEditData(data){
    console.log(data.payload);
    if (data)
    try {
        const requestEdit = yield fetch(`http://website-fpoly-food.herokuapp.com/product/${data.payload.id}`,{
            method: 'PUT',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'

            }),
            body: JSON.stringify(data.payload.list)
        })
        const responeEdit = yield requestEdit.json();
        console.log(responeEdit);
        yield put (editDataSuccess(responeEdit));
    } catch (error) {
        console.log(error);
    }
    else return;
}
export default function* watchFoodSagaGetdata() {
    yield fork(fetchListFood);
    yield takeLatest(ActionType.GET_DATA_GROUP_FOOD, fetchListFoodGroup);
    yield takeLatest(ActionType.ADD_DATA, SagaAddData);
    yield takeLatest(ActionType.DELETE_DATA,SagaDeleteData);
    yield takeLatest(ActionType.EDIT_DATA,SagaEditData)


}