
import configuracao from "../../shared/setting/configuration";
import {FindRole} from "./data-type/find-data";


export async function findRole(param: FindRole.Param, token: string): Promise<FindRole.Role> {
    try{
        //console.log(configuracao.api + 'roles/' + param.id)

        const response = await fetch(configuracao.api + 'roles/' + param.id,{
            method: 'GET',
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
    }catch(err){
        console.error(err);
        throw err;
    }

}

