import configuracao from "../../shared/setting/configuration";
import {CreateRole} from "./data-type/create-data";


export async function createRole(roleName: string, token: string): Promise<CreateRole.Role> {
    try {
        const response = await fetch(configuracao.api + 'roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({name: roleName}),
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar fazer login: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

        }

        return await response.json();
    } catch (err) {
        console.error(err);
        throw err
    }
}