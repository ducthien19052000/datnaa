import { put, takeLatest } from 'redux-saga/effects';
import { ActionType, getDataSuccess } from '../Action/userAction';


function* fetchUser(){
    
        const isLogin = localStorage.getItem('accessToken')
  
  if(isLogin){
    try {
    
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/user/me`,{
                method: 'GET',
                headers: new Headers({
                    'Accept' : '*/*',
                    'Authorization': `Bearer ${isLogin}`
                    
                })
            })
        const resp = yield requestGet.json();
            console.log(resp)
            yield put(getDataSuccess(resp));
       } catch (error) {
           console.log(error)
       }
  }
   
     

    
   
}
export default function* watchUserSagaGetData(){
    yield takeLatest(ActionType.GET_USER, fetchUser)


}