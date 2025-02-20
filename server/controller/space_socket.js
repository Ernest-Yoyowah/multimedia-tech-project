import WebSocket from "ws";
import space_service from "./../service/spaceService.js";
import log_service from "./../service/logService.js"

const ws = new WebSocket.Server({noServer:true});

//ws - websocket, wsc - websocket client
ws.on("connection",(wsc,request)=>{

    wsc.send(JSON.stringify({ status: "success", message: "connected to space" }));

    wsc.on("message",(msg)=>{

        try{

            let payload_in=JSON.parse(msg);

            wsc.send(JSON.stringify(space_service.get_space_ugc(wsc.space_id,wsc.user_id)));

            if(payload_in){

                if(payload_in.message && payload_in.byte_image){

                    space_service.send_ugc(wsc.space_id,wsc.user_id,{message:payload_in.message,byte_image:payload_in.byte_image});

                } else if(payload_in.message && !payload_in.byte_image){

                    space_service.send_ugc(wsc.space_id,wsc.user_id,{message:payload_in.message,byte_image:""});

                };
            }

        } catch(error){

            console.error("Invalid JSON received:", msg);

            wsc.send(JSON.stringify({ status: "error", message: "Invalid JSON format" }));

        };

    });

    wsc.on("close",()=>{

        //get track of the user that disconnected

        console.log("client disconnected from the session");

    });

});

export default ws;
