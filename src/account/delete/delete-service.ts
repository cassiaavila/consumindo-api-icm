import configuracao from "../../shared/setting/configuration";
import {DeleteAccount} from "./data-type/delete-data";


export async function deleteAccount(param: DeleteAccount.Param, token: string) {
    try {
        const response = await fetch(configuracao.api + 'accounts/' + param.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }
        return await response.json();

    } catch (err) {
        console.error("Error deleting account");
        throw err;
    }
}
