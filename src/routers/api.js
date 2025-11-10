import { Router } from "express";
import {
  createPost,
  delPost,
  getPost,
  gettAllPost,
  updatePost,
} from "../controller/apiController.js";

const router = Router();

router.post("/create-post", createPost);

router.get("/get-all", gettAllPost);

router.get("/get/:id", getPost);

router.put("/update/:id", updatePost);

router.delete("/del/:id", delPost);

export default router;
