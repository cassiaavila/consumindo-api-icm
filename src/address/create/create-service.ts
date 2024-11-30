import configuracao from "../../shared/setting/configuration";
import {CreateAddress} from "./data-type/address-data";


export async function createAddress(body: CreateAddress.Body, token: string) : Promise<CreateAddress.Address> {
    try {
        const response = await fetch(configuracao.api + 'address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(body)

        })
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro ao tentar criar Address: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

        }

        return await response.json();
    } catch (error) {
        console.log('FunctionCreateAddress:\n', error);
        throw error;
    }
}