import {CreatePerson} from "../../create/data-type/person-data";


export namespace FindPerson{
    export type Param={
        id:string,
    }
    export type Person = CreatePerson.Person
}