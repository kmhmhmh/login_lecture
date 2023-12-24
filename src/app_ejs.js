const express= require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs"); //뷰세팅 값

app.get('/', (req,res)=>{
    res.render("home/index") //ejs를 안쓰는 이유 뷰 세팅 ejs설정해 놨음
}) 

app.get('/login', (req,res)=>{
    res.render("home/login")
})

app.listen(3000, ()=>{    //서버 넘버
    console.log("서버가동");//서버구동
});