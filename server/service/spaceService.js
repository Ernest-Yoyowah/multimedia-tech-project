import log_service from "./logService.js"

let space_ref=[];
let space_pool=[];


const space_isExist=(space_id)=>{
    
    for(let i=0;i<space_pool;i++){
        if(space_pool[i].space_id==id){
            return {isExist:true,pos:i};
        }
    }

    return false;

};



const isAdmin=(pos,user_id)=>{

        if(space_pool[pos].admin_id==user_id){
            return true;
        };

    return false;

};



const isSubUser=(s_id,user_id)=>{
    const isExist=space_isExist(s_id);

    if(isExist.isExist==true){

        for(let i=0;i<space_pool[isExist.pos].sub_users.length;i++){
            if(space_pool[isExist.pos].sub_users[i]==user_id){
                return true;
            };
        };

    };

    return false;
};



let create_space = (admin_id,space_name,space_img) =>{

    try{
        const space_id=log_service.gen_id();

        space_ref.push({space_name,space_id,space_img});

        space_pool.push({admin_id,space_id,space_name,space_img,sub_users:[],space_ugc:[]});

        return true;

    } catch(error){

        return false;

    }

};



const space = () =>{
    return space_ref;
};



const delete_space=(user_id,space_id)=>{
    try{

        const isExist=space_isExist(space_id);

        if(isExist.isExist==true && isAdmin(isExist.pos,user_id)){

            space_pool.splice(isExist.pos,1);

            return true;

        };

        return false;

    } catch(error){

        return false;

    }
};




const get_space_ugc=(s_id,u_id)=>{
    const isExist=space_isExist(s_id);

    if(isExist.isExist==true && (isAdmin(isExist.pos,uid)==true || isSubUser(s_id,u_id)==true)){
        return space_pool[isExist.pos].space_ugc;
    };

    return {};

};



const join_space=(s_id,u_id)=>{

    const isExist=space_isExist(s_id);

    if(isExist.isExist==true){
        space_pool[isExist.pos].sub_users.push(u_id);

        return true;
    };

    return false;

};



const send_ugc=(s_id,u_id,content)=>{

    const isExist=space_isExist(s_id);

    if(isExist.isExist==true){
        space_pool[isExist.pos].space_ugc.push({user_id:u_id,space_id:s_id,ugc:content});
        return true;
    };

    return false;

};



export default{
    create_space,
    space,
    delete_space,
    get_space_ugc,
    join_space,
    send_ugc
}