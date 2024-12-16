import multer from "multer";

import space_operands from "./../service/spaceService.js";
import auth from "./../middleware/auth_reader.js"


const request_campus = (req,res) => {

    const user_id=req.query.user_id;

    if(auth.id_verify(user_id)==false){
        return res.status(404).json({message:"id is invalid"});
    };

    return res.json(space_operands.space);

};


const create_campus = (req,res) => {
    const user_id=req.query.user_id;

    if(auth.id_verify(user_id)==false){
        return res.status(404).json({message:"id is invalid"});
    };

    if(req.file){
        const fileBytes = req.file.buffer;
    };

    const {space_name} = req.body;

    let isCreated=space_operands.create_space(user_id,space_name,fileByte);

    if(isCreated==true){
        return res.status(200).json({isCreated:isCreated});
    };

    return res.status(500).json({ error: 'Internal Server Error' });
};


const join_campus= (req,res) =>{
    const user_id=req.query.user_id;

    if(auth.id_verify(user_id)==false){
        return res.status(404).json({message:"id is invalid"});
    };

    const space_id=req.query.space_id;

    let isJoined=space_operands.join_space(space_id,user_id);

    if(isJoined==true){

        return res.json({isJoined:true});

    } else{

        return res.json({isJoined:false});

    };

};



const request_campus_specific=(req,res)=>{
    const user_id=req.query.user_id;

    if(auth.id_verify(user_id)==false){
        return res.status(404).json({message:"id is invalid"});
    };

    const space_id=req.query.space_id;

    let ugc_payload=space_operands.get_space_ugc(space_id,user_id);

    if(ugc_payload.length>0){
        return res.json(ugc_payload);
    }

    return res.status(404).json({message:"not a member"});
};



const send_ugc=(req,res)=>{

    const user_id=req.query.user_id;

    if(auth.id_verify(user_id)==false){
        return res.status(404).json({message:"id is invalid"});
    };

    if(req.file){
        const fileBytes = req.file.buffer;
    };

    const space_id=req.query.space_id;

    let content=req.body;

    let isSent=space_operands.send_ugc(space_id,user_id,{message:content.message,image_byte:fileByte});

    if(isSent==true){
        return res.json({isSent:true});
    };

    return res.json({isSent:false});

};



export default{
    request_campus,
    create_campus,
    join_campus,
    request_campus_specific,
    send_ugc
}