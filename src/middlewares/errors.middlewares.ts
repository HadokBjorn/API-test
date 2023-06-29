import httpStatus from "http-status"
import { Request,Response, NextFunction } from "express"

export default function errorHandler(error:{type:string, message: string}, req:Request, res: Response, next:NextFunction){
    if(error.type === "NotFoundError"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if(error.type === "ConflictError"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Somethig wrong, sorry! :(")
}