import configuracao from "./shared/setting/configuration";
import {listRole} from "./role/list/list-service";
import {login} from "./auth/login/login-service";
import {Data} from "./auth/login/data-type/login-data";
import {createRole} from "./role/create/create-service";
import {findRole} from "./role/find/find-service";
import {deleteRole} from "./role/delete/delete-service";
import {DeleteRole} from "./role/delete/data-type/delete-data";
import {updateRole} from "./role/update/update-service";
import {CreateRole} from "./role/create/data-type/create-data";
import {createAccount} from "./account/create/create-service";
import {listAccount} from "./account/list/list-service";
import {FindAccount} from "./account/find/data-type/find-data";
import {findAccount} from "./account/find/find-service";


async function main() {
    try {
        const auth: Data.Auth = await login(configuracao.usuario, configuracao.password)
        // const role = await createRole('PROFESSORA', auth.token);
        const list = await listRole({offset: 0, limit: 10}, auth.token)
        console.log(auth.token)
        let resultRole
        for( const role of list.data){
            if(role.name == 'UNGIDO'){
                resultRole = role
            }
        }
        if(!resultRole){
            throw new Error('Role não encontrada')
        }
        //const accounT = await createAccount({username: 'cassia@gmail.com', roleId: resultRole.id}, auth.token)
        //console.log(accounT)
        const listAccountT = await listAccount({offset: 0, limit: 10}, auth.token)
        console.log(listAccountT)
        const findAccountT = await  findAccount({id: listAccountT.data[0].id}, auth.token)
        console.log('Começo Find', findAccountT)


    } catch (e) {
        console.error('FunctionMain:\n', e)
    }
}

main()
