import dotenv from "dotenv";
import express from 'express';

import log_router from './routes/loginRoutes.js';
import space_router from "./routes/spaceRouter.js";

import space_service from "./service/spaceService.js";
import ws from "./controller/space_socket.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/login", log_router);
app.use("/space", space_router);


const PORT = process.env.SERVER_PORT || 3000;


const server=app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});

server.on("upgrade",(request,socket,head)=>{

  const url = new URL(request.url,`http://${request.headers.host}`);

  const user_id=url.searchParams.get("user_id");

  const space_id=url.searchParams.get("space_id");

  if(url.pathname=="/request_campus_specific" && space_service.space_isExist(space_id).isExist==true && (space_service.isAdmin(space_id,user_id) || space_service.isSubUser(space_id,user_id))){

    ws.handleUpgrade(request,socket,head,(ws)=>{

      ws.user_id=user_id;
      ws.space_id=space_id;

      ws.emit("connection",ws,request);

    });

  } else{

    socket.destroy();

  }

});