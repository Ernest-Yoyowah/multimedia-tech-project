import join_campus from "./services/join_campus_trigger.js";
import create_campus from "./services/create_campus_trigger.js";
import newUser from "./services/new_user_trigger.js";
import oldUser from "./services/old_user_trigger.js";
import request_campus from "./services/request_campus_trigger.js";

class entry{
    constructor(){

        this.joiner=join_campus();
        this.creator=create_campus();
        this.new_user=newUser();
        this.old_user=oldUser();
        this.request=request_campus();

    }

    //payload - name,phone,email,pasword
    new_user_login(payload){
        return this.new_user(payload);
    }


    //payload - email,password
    old_user_login(payload){
        return this.old_user(payload);
    }


    //payload user_id, space_id , space_name , description
    create_space(payload){
        return this.creator(payload);
    }


    request_campus(){
        return this.request();
    }

    //payload user_id , space_id
    join_campus(payload){
        this.joiner(payload)
    }

    socket_handling(payload){

    }
}