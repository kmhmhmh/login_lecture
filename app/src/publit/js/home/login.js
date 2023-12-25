"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password : password.value,
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"//json 파일 표현시 headers로 표현할 수 있다
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then(console.log);
}
