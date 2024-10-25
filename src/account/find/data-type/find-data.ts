import {FindRole} from "../../../role/find/data-type/find-data";
import {CreateAccount} from "../../create/data-type/account-data";

export namespace FindAccount {
    export type Param = {
        id: string,
    }
    export type Account = CreateAccount.Account


}