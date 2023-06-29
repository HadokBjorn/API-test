import { peopleId } from "@/services/people.services";
import { Request, Response } from "express"
import httpStatus from "http-status"
import { QueryResult } from "pg";
import Repository from "repositories/people.repositories"

async function getPeople(req:Request, res:Response){
    const id = await peopleId();
    const people = await Repository.getPeopleDB(id)
    res.status(httpStatus.OK).send(people.rows[0]);
}

const peopleControllers = {
    getPeople,
}
export default peopleControllers;