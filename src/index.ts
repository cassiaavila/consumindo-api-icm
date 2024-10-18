
import configuracao from "./shared/setting/configuration";
import { listRole } from "./role/list/list-service";
import { login } from "./auth/login/login-service";
import { Data } from "./auth/login/data-type/login-data";
import {createRole} from "./role/create/create-service";
import {findRole} from "./role/find/find-service";



async function main(){
    try {
        const auth: Data.Auth = await login(configuracao.usuario, configuracao.password)
        //const role = await createRole('PROFESSORA', auth.token);
        const  list = await listRole({ offset: 0, limit:10 }, auth.token)
        const find = await findRole({id:'1a8ac0fb-475b-4324-a75e-730133b02413'}, auth.token);
        // console.log(list)
        // console.log(auth.token)
        console.log(find)

    }catch (e) {
        console.error(e)
    }
}

main()
