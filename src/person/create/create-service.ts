import configuracao from "../../shared/setting/configuration";
import {CreatePerson} from "./data-type/person-data";



export async function createService(body: CreatePerson.Body, token: string) {
    try{
        const response = await fetch(configuracao.api + 'persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(body),

        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar criar person: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

        }

    }catch(error){
        console.error('FunctionCreatePerson : \n', error);
        throw error;
    }
}