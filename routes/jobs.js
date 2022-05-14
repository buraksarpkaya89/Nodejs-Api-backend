import express from "express";

import {getJobs,createJob,getJob,deleteJob,updateJob} from "../controllers/jobs.js"

const router =express.Router();

router.get("/jobs", getJobs)
router.post("/job", createJob)
router.get("/job/:id", getJob)
router.delete("/job", deleteJob)
router.put("/job/:id", updateJob)

export default router