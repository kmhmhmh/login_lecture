const express= require("express");
const bodyParser=require("body-parser");//이것만등록하면안된다 미드웨어 등록
const app = express();



const home = require("./src/routes/home" )//라우팅

app.set("views", "./src/views");
app.set("view engine", "ejs"); //뷰세팅 값
app.use(express.static(`${__dirname}/src/publit`));
app.use(bodyParser.json());
//bodyParser (json)파일을 가져올수 있도록 도와주는 미드웨어
app.use(bodyParser.urlencoded({extended:true}));
//URL을 통해서 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
//제대로 인식되지 않는 문제 해결

app.use("/", home);//use => 미들웨어를 등록해주는 메서드

module.exports = app