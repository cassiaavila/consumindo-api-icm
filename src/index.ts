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
import {deleteAccount} from "./account/delete/delete-service";
import {DeleteAccount} from "./account/delete/data-type/delete-data";
import {updateAccount} from "./account/update/update-service";
import {UpdateAccount} from "./account/update/data-type/update-data";
import {forgotAuth} from "./auth/forgot/forgot-service";
import {resetPasswordService} from "./auth/reset-password/reset-password-service";
import {listToSelectService} from "./account/list-to-select/list-to select-service";
import {listPerson} from "./person/list/list-service";
import {createService} from "./person/create/create-service";
import {CreatePerson} from "./person/create/data-type/person-data";
import {findService} from "./person/find/find-service";
import {updatePerson} from "./person/update/update-service";


async function main() {
    try {
        const auth: Data.Auth = await login(configuracao.usuario, configuracao.password)
        // const role = await createRole('PROFESSORA', auth.token);
        const list = await listRole({offset: 0, limit: 10}, auth.token)
        console.log(auth.token)
        console.log(list)
        let resultRole
        for (const role of list.data) {
            if (role.name == 'SECRETARY') {
                resultRole = role
            }
        }
        if (!resultRole) {
            throw new Error('Role não encontrada')
        }

        //const accounT = await createAccount({username: 'cassia@gmail.com', roleId: resultRole.id}, auth.token)
        //console.log(accounT)
        const listAccountT = await listAccount({offset: 0, limit: 10}, auth.token)
        console.log(listAccountT)
        let resultAccount
        for (const account of listAccountT.data) {
            if (account.username == 'sdcassia2@gmail.com') {
                resultAccount = account
                console.log(account)

            }
        }
        if (!resultAccount) {
            throw new Error('Conta não encontrada')
        }
        //const findAccountT = await  findAccount({id: listAccountT.data[0].id}, auth.token)
        //console.log('Começo Find', findAccountT)
        //const deleAccountT = await deleteAccount({id: resultAccount.id}, auth.token)
        //console.log(deleAccountT)
        // const updateAccountT = await  updateAccount({ id: listAccountT.data[0].id }, { roleId: resultRole.id }, auth.token)
        //console.log(updateAccountT)
        //const authForgotT = await forgotAuth({email: 'sdcassia2@gmail.com'})
        //console.log('forgot', authForgotT)
        //const resetPasswordT = await resetPasswordService({password: '1234',forgotCode: 'GRZOQWSG',username: 'sdcassia2@gmail.com'})
        //console.log('resetPassword', resetPasswordT)
        const listToSelectAccount = await listToSelectService({}, auth.token)
        console.log(listToSelectAccount)
        //const createPerson1 = await createService({accountId: '8063e923-f3cb-425b-9ec6-a9483e305074', cpf: '26839626814', name: 'Aparecida de Cássia', phone: '63 992029088', birthday: new Date }, auth.token)
        const listPerson1 = await listPerson({offset: 0, limit: 10}, auth.token)
        console.log('Listar pessoa', listPerson1)
        const findPerson = await findService({id: '09380717-d445-45aa-bd6c-d236b7291452'}, auth.token)
        console.log(findPerson)
        const updatePerson1 = await updatePerson({id: '09380717-d445-45aa-bd6c-d236b7291452'}, {name: 'Aparecida'}, auth.token)
        console.log('Atualizar pessoa', updatePerson1)



    } catch (e) {
        console.error('FunctionMain:\n', e)
    }
}

main()
