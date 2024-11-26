import {CreateAccount} from "../../create/data-type/account-data";

export namespace ListToSelectAccount{
    export type Filter={
        search?:string,
        manager?:string,
        isActive?:boolean,
    }
    export type Result={
        data: CreateAccount.Account[]
    }
}