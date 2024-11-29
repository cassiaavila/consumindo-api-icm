import configuracao from "../../shared/setting/configuration";
import {FindPerson} from "./data-type/find-data";


export async function findService(param: FindPerson.Param, token: string): Promise<FindPerson.Person> {
    try {
        const response = await fetch(configuracao.api + 'persons/' + param.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,

            },
        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao encontrar pessoa: ${errorMessage}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}