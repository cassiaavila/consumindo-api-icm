import configuracao from "./shared/setting/configuration";
import {listRole} from "./role/list/list-service";
import {login} from "./auth/login/login-service";
import {Data} from "./auth/login/data-type/login-data";
import {createRole} from "./role/create/create-service";
import {findRole} from "./role/find/find-service";
import {deleteRole} from "./role/delete/delete-service";
import {DeleteRole} from "./role/delete/data-type/delete-data";


async function main() {
    try {
        const auth: Data.Auth = await login(configuracao.usuario, configuracao.password)
        const role = await createRole('PROFESSORA', auth.token);
        const list = await listRole({offset: 0, limit: 10}, auth.token)
        const find = await findRole({id: role.id}, auth.token);
        // console.log(list)
        console.log(auth.token)
        console.log(find)
        const deleteR = await deleteRole({ id: find.id }, auth.token);
        console.log('delete  '+ deleteR)
        console.log(await findRole({id: role.id}, auth.token))

    } catch (e) {
        console.error(e)
    }
}

main()
