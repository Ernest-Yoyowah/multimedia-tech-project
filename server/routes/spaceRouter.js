import express from 'express';
import multer from "multer";
import space_control from "../controller/spaceController.js";


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const space_router = express.Router();

space_router.post("/create_campus",upload.single('image'),(req,res)=>space_control.create_campus(req,res));

space_router.get("/request_campus",(req,res)=> space_control.request_campus(req,res));

space_router.get("/join_campus",(req,res)=>space_control.join_campus(req,res));

//space_router.get("/request_campus_specific",(req,res)=>space_control.request_campus_specific(req,res));

space_router.post("/send_ugc", upload.single('image') ,(req,res)=>space_control.send_ugc(req,res));

export default space_router;