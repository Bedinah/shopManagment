import { purchaseActions } from "./index.js";
import { getAllPurchaseService } from "./services.js";

export const getAllPurchaseAction = () => async (dispatch) => {
  dispatch(purchaseActions.setIsFetching(true));
  try {
    const res = await getAllPurchaseService();
    if (res?.status === 200) {
      dispatch(purchaseActions.setIsFetching(false));
      dispatch(purchaseActions.setProducts(res?.data));
    }
    dispatch(purchaseActions.setIsFetching(false));
  } catch (error) {
    console.log("Error: " + error);
  }
};
