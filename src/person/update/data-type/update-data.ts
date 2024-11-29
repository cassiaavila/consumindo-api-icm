import {CreatePerson} from "../../create/data-type/person-data";

export namespace UpdatePerson {
    export type Param={
        id:string,
    }
    export type Body={
        isActive?: boolean,
        name?: string,
        cpf?: string,
        phone?: string,
        birthday?: Date,
    }
    export type Person = CreatePerson.Person

}