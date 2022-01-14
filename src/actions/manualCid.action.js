import {
  CHECK_FETCHING,
  CHECK_SUCCESS,
  CHECK_NOTFOUND,
  ADD_NUMBER,
  CLEAR_NUMBER,
  CLOSENOTIFICATION,
  server,
} from "../Constants";

import { httpClient } from "../utils/HttpClient";
import * as noificationAction from "../actions/notification.action";

export const setStateToFetching = () => ({
  type: CHECK_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: CHECK_SUCCESS,
  payload,
});
export const setStateToNotfound = (payload) => ({
  type: CHECK_NOTFOUND,
  payload,
});
export const setStateToAddNumber = (payload) => ({
  type: ADD_NUMBER,
  payload,
});
export const setStateToClearNumber = () => ({
  type: CLEAR_NUMBER,
});
export const setStateToCloseNotifi = () => ({
  type: CLOSENOTIFICATION,
});

export const patientCheck = ({ display }, navigete) => {
  const cid = display.join("");
  return async (dispatch) => {
    dispatch(setStateToFetching());
    //console.log(cid);
    const result = await httpClient.post(`${server.PATIENT_URL}/${cid}`);
    if (result.data.msg == "found") {
      dispatch(setStateToSuccess(result.data));

      console.log(JSON.stringify(result.data.cid));
      // localStorage.setItem("cid", data.cid);
      navigete("/visitRegister");
    } else if (result.data.msg == "notfound") {
      dispatch(
        noificationAction.setStateTONotification(
          "ไม่พบข้อมูลของท่านในระบบ กรุณาติดต่อห้องบัตร"
        )
      );
      const myTimeout = setTimeout(myGreeting, 2000);
      function myGreeting() {
        dispatch(noificationAction.setStateToCloseNotifi());
      }
    }
  };
};

export const btnPress = (newnumber) => {
  return (dispatch) => {
    // console.log(newnumber);

    dispatch(setStateToAddNumber(newnumber));
  };
};

export const clearNumber = () => {
  return (dispatch) => {
    dispatch(setStateToClearNumber());
  };
};
