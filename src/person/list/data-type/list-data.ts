import {CreateAccount} from "../../../account/create/data-type/account-data";
import {CreatePerson} from "../../create/data-type/person-data";

export namespace listDataPerson{
    export type Filter = {
        offset: number,
        limit: number,
        search?: string,
        isActive?: boolean,
    }
    export type Result = {
        offset: number,
        limit: number,
        count: number,
        data: CreatePerson.Person[],

    }

}