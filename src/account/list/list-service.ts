import configuracao from "../../shared/setting/configuration";
import {ListAccount} from "./data-type/list-data";


export async function listAccount(filter: ListAccount.Filter, token: string): Promise<ListAccount.Result> {
    try{
        const response = await fetch(configuracao.api + `accounts?offset=${filter.offset}&limit=${filter.limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar listar conta: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }

        return await response.json();
    }catch (err){
        console.error('Error listing account list');
        throw err;

    }
}