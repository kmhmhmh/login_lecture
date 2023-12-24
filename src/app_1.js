//http://34.66.134.216:8080/login

const express= require("express");
const app = express();

app.get('/', (req,res)=>{ //파라미터 요청 데이터
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
       여기는 루트입니다.
    </body>
    </html>
    `);
}) //경로 설정

app.get('/login', (req,res)=>{
    res.send(
        `<!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
           <input type="text" placeholder="아이디"><br>
           <input type="text" placeholder="비밀번호"><br>
           <button>로그인</button>
        </body>
        </html>`
        );
})

app.listen(3000, ()=>{    //서버 넘버
    console.log("서버가동");//서버구동
});