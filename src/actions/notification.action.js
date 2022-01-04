import { NOTIFICATION, CLOSENOTIFICATION } from "./../Constants";

export const setStateTONotification = (payload) => ({
  type: NOTIFICATION,
  payload,
});

export const setStateToCloseNotifi = () => ({
  type: CLOSENOTIFICATION,
});
