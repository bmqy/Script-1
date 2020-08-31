const http = require("http");
var fs = require("fs");
const server = http.createServer((req, res) => {
  //设置头信息
  res.setHeader("Content-Type", "text/html;charset='utf-8'");

  //直接在页面中打印出来的内容
  //res.write("response write content.");

  //读文件
  fs.readFile("./gov/gov.js", "utf-8", function (err, data) {
    console.log(err, data);
    if (err) {
      console.log("index.js loading is failed :" + err);
    } else {
      eval(data);
      res.end("onload ready");
    }
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("监听服务启动");
});
