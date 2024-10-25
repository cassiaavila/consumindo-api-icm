
import configuracao from "../../shared/setting/configuration";
import {CreateAccount} from "./data-type/account-data";


export async function createAccount(body: CreateAccount.Body, token: string): Promise<CreateAccount.Account> {
    try {
        const response = await fetch(configuracao.api + 'accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(body),

        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar criar conta: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

        }
        return await response.json();

    } catch (err) {
        console.error('FunctionCreateAccount:\n', err);
        throw err;
    }

}