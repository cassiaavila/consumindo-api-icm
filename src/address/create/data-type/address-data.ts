export namespace CreateAddress {
    export type Address = {
        id: string,
        street: string,
        number: number,
        reference: string,
        neighborhood: string,
        city: string,
        state: string
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,
    }

    export type Body = {
        accountId?:string,
        street: string,
        number: number,
        reference: string,
        neighborhood: string,
        city: string,
        state: string
    }
}