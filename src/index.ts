
import {listRole} from "./role/list/list-service";
import {login} from "./auth/login/login-service";
import configuracao from "./shared/setting/configuration";
import {Data} from "./auth/login/data-type/login-data";



async function main(){
    try {
        const  list: any = await listRole({offset: 0, limit:10})
        console.log(list);
    }catch (e) {
        console.error(e);
    }
}
main();
