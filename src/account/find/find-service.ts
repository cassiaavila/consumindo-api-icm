import configuracao from "../../shared/setting/configuration";
import {FindAccount} from "./data-type/find-data";


export async function findAccount(param: FindAccount.Param, token: string): Promise<FindAccount.Account> {
    try{
        const response = await fetch(configuracao.api + 'accounts/' + param.id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },

        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);
        }

       return await response.json();
    }catch (err){
        console.error("Error finding account info");
        throw err;
    }
}