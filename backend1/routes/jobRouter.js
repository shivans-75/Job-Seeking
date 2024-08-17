import express from 'express'
import getAllJobs, { deleteJob }  from "../controllers/jobController.js"
import { isAuthenticated } from "../middlewares/auth.js";
import { postJob,getMyJobs,updateJob, getSingleJob } from "../controllers/jobController.js"
//import { getMyJobs} from "../controllers/jobController.js"



const router = express.Router()
router.get("/getall",getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs",isAuthenticated, getMyJobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id",isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router