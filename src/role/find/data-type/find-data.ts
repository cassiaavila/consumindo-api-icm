export namespace FindRole {
    export type Param = {
        id: string,
    }
    export type Role ={
        id: string,
        name:  string,
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,

    }

}