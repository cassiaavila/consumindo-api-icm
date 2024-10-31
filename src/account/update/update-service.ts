import configuracao from "../../shared/setting/configuration";
import {UpdateAccount} from "./data-type/update-data";


export async function updateAccount(param: UpdateAccount.Param, body: UpdateAccount.Body, token: string): Promise<UpdateAccount.Account> {
    try {

        const response = await fetch(configuracao.api + `accounts/` + param.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(body),
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }
        return await response.json();

    } catch (err) {
        console.error("Failed to update account");
        throw err;
    }

}