import configuracao from "../../shared/setting/configuration";
import {ListToSelectAccount} from "./data-type/list-to-select-data";


export async function listToSelectService(filter: ListToSelectAccount.Filter, token: string): Promise<ListToSelectAccount.Result> {
    try {
        const response = await fetch(configuracao.api + `accounts/to/selects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + token,
            }

        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar listar conta: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

        }
        return await response.json();
    } catch (error) {
        console.error('Error in listToSelectService');
        throw error;

    }
}