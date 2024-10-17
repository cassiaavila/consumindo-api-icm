import configuracao from "../../shared/setting/configuration";
import {ListRole} from "./data-type/list-data";
import {Data} from "../../auth/login/data-type/login-data";
import {login} from "../../auth/login/login-service";


export async function listRole(filter: ListRole.Filter) {
    try {
        const auth: Data.Auth = await login(configuracao.usuario, configuracao.password);
        const response: any = await fetch(configuracao.api + `roles?offset=${filter.offset}&limit=${filter.limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.token,
            },
        })
        return await response.json();
    } catch (err) {
        console.error(err);
        throw err
    }
}

