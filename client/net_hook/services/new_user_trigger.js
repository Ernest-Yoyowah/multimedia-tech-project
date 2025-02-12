import net from "./../global_dcl/base.js";

const newUser=async(payload)=>{

    try {

        const response = await net.post("/login/new_user",JSON.stringify(payload));
        
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

export default newUser