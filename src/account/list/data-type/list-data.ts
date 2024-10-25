
import {CreateAccount} from "../../create/data-type/account-data";

export namespace ListAccount {
    export type Filter = {
        offset: number,
        limit: number,
        search?: string,
        isActive?: boolean,
    }
    export type Result ={
        count: number,
        offset: number,
        limit: number,
        data: CreateAccount.Account[]
    }



}