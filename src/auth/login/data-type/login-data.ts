export namespace Data {

    export type Auth = {
        token: string,
        account: Account,
        role: string,
    }
    export type Account = {
        id: string,
        username: string,
        perfil: Perfil,
        Isactive: boolean,
        createdAt: Date,
        updatedAt: Date,

    }
    export type Perfil ={
        id: string,
        username: string,
        createdAt: string
        updatedAt: string
        isActive: true,
        name: string,
    }

}