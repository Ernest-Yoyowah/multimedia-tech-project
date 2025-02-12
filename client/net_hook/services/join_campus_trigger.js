import net from "./../global_dcl/base.js";

const join_campus=async(payload)=>{

    try {
//set user id and to join id to the header from payload
        const response = await net.get("/card_submission");
        
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

export default join_campus;