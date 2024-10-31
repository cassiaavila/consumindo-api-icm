import configuracao from "../../shared/setting/configuration";
import {ResetPassword} from "./data-type/reset-password-data";


export async function resetPasswordService(body: ResetPassword.Body): Promise<void> {
    try {
        const response = await fetch(configuracao.api + 'auth/guest/reset-password', {
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
    } catch (e) {
        console.error(e);
        throw e;
    }
}