
import {login} from "./auth/login-service";
import configuracao from "./shared/setting/configuration";


async function main(){
    try {
        const auth: any = await login(configuracao.usuario, configuracao.password);
        console.log(auth);
    }catch (e) {
        console.error(e);
    }
}
main();
