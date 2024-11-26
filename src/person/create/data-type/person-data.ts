export namespace CreatePerson {
    export type Person = {
        id: string,
        name: string,
        cpf: string,
        phone: string,
        birthday: Date
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,

    }
    export type Body={
        accountId: string,
        name: string,
        cpf: string,
        phone: string,
        birthday: Date

    }
}