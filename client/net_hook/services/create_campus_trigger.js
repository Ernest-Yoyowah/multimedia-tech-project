import net from "./../global_dcl/base.js";

const create_campus=async(payload)=>{

    try {
//set user id and to join id to the header from payload
        const response = await net.post("/create_campus",JSON.stringify(payload));
        
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

export default create_campus;