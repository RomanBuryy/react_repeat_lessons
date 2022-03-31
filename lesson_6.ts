// const func = (str: string): string=> {
//     return str;
// }
//
// console.log(func('qwerty'));
//

// import {IUser} from './interfaces/user.interface'
//
// const user: IUser = {name: 'roman', age: 12}

import {userService} from "./user.service/user.service";

userService.getAll().then(value => value.data).then(users => {
    for (let user of users) {
        console.log(user.name);
    }
})

