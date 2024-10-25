export namespace UpdateRole {
    export type Param = {
        id: string,

    }
    export type Body = {
        name?: string,
        isActive?: boolean,
    }
    export type Role ={
        id: string,
        name: string,
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,
    }
}