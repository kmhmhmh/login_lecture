

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
}

module.exports = UserStorab