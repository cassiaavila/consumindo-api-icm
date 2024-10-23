import configuracao from "../../shared/setting/configuration";
import {DeleteRole} from "./data-type/delete-data";


export async  function deleteRole(param: DeleteRole.Param, token:string): Promise<DeleteRole.Role> {
    try{

        const response = await fetch(configuracao.api + 'roles/' + param.id,{
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

    }catch(err){
        console.error(err);
        throw err;
    }

}