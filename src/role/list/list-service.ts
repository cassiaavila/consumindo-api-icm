import configuracao from "../../shared/setting/configuration";
import { ListRole } from "./data-type/list-data";


export async function listRole(filter: ListRole.Filter, token: string): Promise<ListRole.Result> {
    try {
        const response = await fetch(configuracao.api + `roles?offset=${filter.offset}&limit=${filter.limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar fazer login: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }

        return await response.json();
    } catch (err) {
        console.error(err);
        throw err
    }
}

