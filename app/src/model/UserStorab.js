"use strict";

class UserStorab{
    static #users = {
        id:["woorimIT", "나개발", "김팀장"],
        password:["1234","1234","12343"],
        name:["나","형님은","언제올꺼냥!"]
    };

    static getUsers(...fields){
        const users= this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            console.log(newUsers,field);
                if(users.hasOwnProperty(field)){
                    newUsers[field] = users[field];
                }
                return newUsers;
        },{});
        console.log(newUsers);
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo=usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.password.push(userInfo.password)
        return{success:true}
    }
}

module.exports = UserStorab