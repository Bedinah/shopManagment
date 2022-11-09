import axios from "axios";

export const getAllPurchaseService = async () => {
  try {
    const res = await axios.get("http://localhost:8080/v1/shop/purchase");
    return res;
  } catch (err) {
    console.log("error: ", err);
  }
};
