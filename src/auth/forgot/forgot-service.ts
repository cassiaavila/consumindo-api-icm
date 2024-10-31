import configuracao from "../../shared/setting/configuration";
import {AuthForgot} from "./data-type/forgot-data";


export async function forgotAuth(body: AuthForgot.Body) : Promise<any> {
    try{
        const response = await fetch(configuracao.api + 'auth/forgot/password',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
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