import express from 'express';
import log_router from './routes/loginRoutes.js';
import space_router from "./routes/spaceRouter.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/login", log_router);
app.use("/space", space_router);


const PORT = process.env.SERVER_PORT || 3000;


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });