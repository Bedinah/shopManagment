import auth, { authActions } from "./index";
import { loginService } from "./services";

export const loginAction = (data) => async (dispatch) => {
  dispatch(authActions.setIsFetching(true));
  try {
    const res = await loginService(data);
    if (res?.status === 200) {
      dispatch(authActions.login(res.data));
      dispatch(authActions.setIsFetching(false));
    }
    dispatch(authActions.setIsFetching(false));
  } catch (error) {
    // dispatch(authActions.setIsFetching(false));
    console.log("Error:" + error);
  }
};
