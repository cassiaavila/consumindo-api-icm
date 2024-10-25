import configuracao from "../../shared/setting/configuration";
import {UpdateRole} from "./data-type/update-data";


export async function updateRole(param: UpdateRole.Param, body: UpdateRole.Body, token: string): Promise<UpdateRole.Role> {
    try {

        const response = await fetch(configuracao.api + 'roles/' + param.id, {
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
        console.error(err);
        throw err;
    }

}