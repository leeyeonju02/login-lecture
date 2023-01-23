"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};
//내보내기
module.exports = {
  hello,
  login,
};
