import { Router } from "express";
import peopleRouter from "./people.routes";

const routers = Router();
routers.use(peopleRouter)

export default routers;