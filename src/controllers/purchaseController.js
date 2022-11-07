import PurchaseModel from "../models/purchase.js";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController.js";

export const createController = create(PurchaseModel);
export const getAllController = getAll(PurchaseModel);
export const getOneController = getOneById(PurchaseModel);
export const updateOneController = updateOneById(PurchaseModel);
export const deleteOneController = deleteOneById(PurchaseModel);
