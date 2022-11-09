import { productActions } from "./index.js";
import { getAllProductService } from "./services.js";

export const getAllProductAction = () => async (dispatch) => {
    dispatch(productActions.setIsFetching(true));
    try {
        const res = await getAllProductService();
        if(res?.status===200){
            dispatch(productActions.setIsFetching(false));
            dispatch(productActions.setProducts(res?.data));
        }
        dispatch(productActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};