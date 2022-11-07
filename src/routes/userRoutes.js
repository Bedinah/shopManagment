import { Router } from "express";
import * as UserController from "../controllers/userController.js";
import { checkUser, loginUser } from "../middleware/checkUserExist.js";
import { verifyUserToken } from "../middleware/verifyToken.js";

const route = Router();
route.post("/login", loginUser);
// route.use(verifyUserToken);
route
  .route("/")
  .post(checkUser, UserController.createController)
  .get(UserController.getAllController);

route
  .route("/:id")
  .patch(UserController.updateOneController)
  .get(UserController.getOneController)
  .delete(UserController.deleteOneController);

export default route;
