import {CreateAddress} from "../../../address/create/data-type/address-data";
import {CreatePerson} from "../../../person/create/data-type/person-data";
import {CreateRole} from "../../../role/create/data-type/create-data";

export namespace CreateAccount {
    export type Body ={
        username: string,
        roleId: string,

    }
    export type Account={
        id: string,
        username: string,
        role: CreateRole.Role | null,
        expireCodeAt: Date |null,
        forgotCode: string,
        addressId: string,
        address: CreateAddress.Address,
        personId: string,
        person: CreatePerson.Person,
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,
    }
}