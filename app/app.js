const express= require("express");
const app = express();



const home = require("./src/routes/home" )//라우팅

app.set("views", "./src/views");
app.set("view engine", "ejs"); //뷰세팅 값
app.use(express.static(`${__dirname}/src/publit`));

app.use("/", home);//use => 미들웨어를 등록해주는 메서드

module.exports = app