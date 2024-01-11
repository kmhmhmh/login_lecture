"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);


router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
//로그인을 처리해야 됨으로 process 함수를 이용한다.

module.exports = router; //외부로 내보내기 해주는 명령어