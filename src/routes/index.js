import express from "express";
import productRoutes from "./productRoutes.js";
import purchasesRoutes from "./purchaseRoutes.js";
import salesRoutes from "./salesRoutes.js";
import userRoutes from "./userRoutes.js";

const app = express();

app.use("/product", productRoutes);
app.use("/purchase", purchasesRoutes);
app.use("/sales", salesRoutes);
app.use("/user", userRoutes);

export default app;
