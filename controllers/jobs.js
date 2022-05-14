import {v4 as uuid} from "uuid"

let jobs = [];

export const getJobs =(req,res) =>{
    res.send(jobs)
};

export const createJob =(req,res)=> {
    const job = req.body;

    jobs.push({...job , id:uuid()});
    res.send("job Added Successfully");
};

export const getJob = (req,res) =>{
    const singlejob = jobs.filter((job)=> job.id === req.params.id);
    res.send(singlejob)
}
export const deleteJob = (req,res) =>{
    const job = req.body;

    jobs = job.filter((job1)=> job1.id !== req.params.id);
    res.send("jobs deleted successfully")
}
export const updateJob = (req,res) =>{
    const job = jobs.find((job)=> job.id === req.params.id);
    job.jobName =req.body.jobName;
    job.priority = req.body.priority;
    res.send("job Updated")
}