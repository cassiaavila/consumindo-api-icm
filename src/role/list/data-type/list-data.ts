export namespace ListRole {
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
        data: Role[],
    }
    export type Role ={
        id: string,
        name:  string,
        createdAt: Date,
        updatedAt: Date,
        isActive: boolean,

    }

}