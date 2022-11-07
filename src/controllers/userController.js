import UserModel from "../models/user.js";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController.js";

export const createController = create(UserModel);
export const getAllController = getAll(UserModel);
export const getOneController = getOneById(UserModel);
export const updateOneController = updateOneById(UserModel);
export const deleteOneController = deleteOneById(UserModel);
