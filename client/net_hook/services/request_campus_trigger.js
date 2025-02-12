import net from "./../global_dcl/base.js";

const request_campus=async()=>{

    try {

        const response = await net.get("/space/request_campus");
        
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

export default request_campus