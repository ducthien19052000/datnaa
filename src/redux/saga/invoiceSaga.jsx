import { put, takeLatest } from "redux-saga/effects";
import { addDataSuccess } from "../Action/invoiceAction";
import { ActionType, getDataSuccess } from "../Action/invoiceAction";

function* fetchAddInvoice(data) {
  console.log(data);
  const token = localStorage.getItem("accessToken");
  if (token) {
    try {
      const requestGet = yield fetch(
        `https://website-fpoly-food.herokuapp.com/invoice/`,
        {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }),
          body: JSON.stringify(data.payload),
        }
      );
      const resp = yield requestGet.json();
      console.log(resp);

      localStorage.removeItem("OrderDetail");
      yield put(addDataSuccess(resp.body.content));
    } catch (error) {}
  }
}

function* SagaGetDataInvoice() {
  try {
    try {
      const requestGet = yield fetch(
        `https://website-fpoly-food.herokuapp.com/invoice/`,
        {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "*/*",

            // 'Authorization': `Bearer ${token}`
          }),
        }
      );
      const resp = yield requestGet.json();
      console.log(resp.body.content);
      yield put(getDataSuccess(resp.body.content));
    } catch (error) {}
  } catch (error) {}
}

export default function* watchInvoiceSagaGetData() {
  yield takeLatest(ActionType.ADD_INVOICE_DATA, fetchAddInvoice);
  yield takeLatest(ActionType.GET_INVOICE_DATA, SagaGetDataInvoice);
}
