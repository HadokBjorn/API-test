import peopleControllers from "controllers/people.controllers";
import { Router } from "express";

const peopleRouter:Router = Router();

peopleRouter.get("/person", peopleControllers.getPeople)

export default peopleRouter