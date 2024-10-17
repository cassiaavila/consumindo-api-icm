import configuracao from "../shared/setting/configuration";


export async function login(username: string, password: string) {
    const response = await fetch(configuracao.api + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password})
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erro ao tentar fazer login: ${response.status} - ${response.statusText}. Detalhes: ${errorMessage}`);

    }

    const data = await response.json();
    return data;
}


