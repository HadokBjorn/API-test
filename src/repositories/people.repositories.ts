import { db } from "database/database.connections";

function getPeopleDB(id:number){
    return db.query(`SELECT * FROM people WHERE id = $1`,[id])
}
function peopleCount(){
    return db.query(`SELECT count(people.*) AS people_number FROM people`)
}

const peopleRepositories = {
    getPeopleDB,
    peopleCount,
}
export default peopleRepositories;