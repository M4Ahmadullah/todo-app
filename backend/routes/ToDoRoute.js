import { Router } from "express";
import getToDoModel from "../controllers/getToDoModel.js";
import createToDoModel from "../controllers/createToDoModels.js";
import updateToDoModel from "../controllers/updateToDoModels.js";
import deleteToDoModel from "../controllers/deleteToDoModels.js";

// Define
const router = Router();

router.get("/", getToDoModel);
router.post("/create", createToDoModel);
router.put("/update", updateToDoModel);
router.delete("/delete", deleteToDoModel);

// Export
export default router;
