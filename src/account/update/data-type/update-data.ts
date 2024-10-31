import {CreateAccount} from "../../create/data-type/account-data";

export namespace  UpdateAccount{
    export type Param = {
        id: string,

    }
    export type Body  = {
        password?: string,
        roleId?: string,
    }
    export type Account = CreateAccount.Account
}