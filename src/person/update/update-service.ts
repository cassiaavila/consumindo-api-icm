import configuracao from "../../shared/setting/configuration";
import {UpdatePerson} from "./data-type/update-data";


export async function updatePerson(param: UpdatePerson.Param, body: UpdatePerson.Body, token: string): Promise<UpdatePerson.Person> {
    try {
        const response = await fetch(configuracao.api + 'persons/' + param.id, {
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
    } catch (e) {
        console.error("Failed to update person");
        throw e;
    }
}