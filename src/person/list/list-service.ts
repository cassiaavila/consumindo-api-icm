import {request} from "node:http";
import configuracao from "../../shared/setting/configuration";
import {listDataPerson} from "./data-type/list-data";


export async function listPerson(filter: listDataPerson.Filter, token: string ): Promise<listDataPerson.Result> {
    try{
        const response = await fetch(configuracao.api + `persons?offset=${filter.offset}&limit=${filter.limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao listar pessoa: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }

        return await response.json();
    }catch(e){
        console.error('Error listing Person');
        throw e;
    }
}