import net from "./../global_dcl/base.js";

const oldUser=async(payload)=>{

    try {

        const response = await net.post("/login/old_user",JSON.stringify(payload));
        
        return response.data;

    } catch (error) {

        console.error({
            message: error.message,
            name: error.name,
            stack: error.stack,
          });
          return null;
    };

};

export default oldUser