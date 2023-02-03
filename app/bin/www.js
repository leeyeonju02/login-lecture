const app = require("../app"); //상위 폴더로 이동 후 아래 app.js 파일을 require해오기 위함

const PORT = 3000;
app.listen(PORT, () => {
  console.log("서버 가동");
});
