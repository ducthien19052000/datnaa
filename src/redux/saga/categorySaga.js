import {ActionType, addDataSuccess, deleteDataSuccess, editDataSuccess, getDataSuccess} from '../Action/categoryAction'
import {fork, put, take, takeLatest} from 'redux-saga/effects'

function* fetchListCategory(){
    while(true){
      yield take(ActionType.GET_DATE_CATEGORY)
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/category/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })
                
        })
        const resp = yield requestGet.json();
     
            yield put(getDataSuccess(resp.body.content));

    }
   
}
function* SagaAddData(data){
    console.log('add data',data.payload);
    try {
        const requestAdd = yield fetch(`http://website-fpoly-food.herokuapp.com/category/`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
                "Accept": "application/json",
              
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
        const requestDelete = yield fetch(`http://website-fpoly-food.herokuapp.com/category/${id.payload}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                "Accept": "application/json",
             
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
        const requestEdit = yield fetch(`http://website-fpoly-food.herokuapp.com/category/${data.payload.id}`,{
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
export default function* watchCategorySagaGetdata(){
    yield fork(fetchListCategory);
    yield takeLatest(ActionType.ADD_DATA_CATEGORY,SagaAddData);
    yield takeLatest(ActionType.DELETE_DATA_CATEGORY,SagaDeleteData);
    yield takeLatest(ActionType.EDIT_DATA_CATEGORY,SagaEditData);

}