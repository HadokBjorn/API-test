import { QueryResult } from "pg";
import peopleRepositories from "repositories/people.repositories"

type PeopleNumber = {
    people_number: number,
  }

export async function peopleId():Promise<number>{
    const people: PeopleNumber = (await peopleRepositories.peopleCount()).rows[0]
    const peopleNumber: number= people.people_number
    const floatId = Math.random() * peopleNumber;
    return Math.ceil(floatId)
}