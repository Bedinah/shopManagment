import SalesModel from "../models/sales.js";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController.js";

export const createController = create(SalesModel);
export const getAllController = getAll(SalesModel);
export const getOneController = getOneById(SalesModel);
export const updateOneController = updateOneById(SalesModel);
export const deleteOneController = deleteOneById(SalesModel);
