// node 后端服务器

// 引入编写好的api
const userApi = require('./api/userApi');


// 引入文件模块
const fs = require('fs');
// 引入处理路径模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// 引入Express
const express = require('express');
const app = express();

// 引入session模块
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// 跨域支持
app.all('*', (req, res, next) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token,sign');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  next();
});

// 后端api路由
app.use('/api/user', userApi);

// 访问静态资源文件，这里是访问所有dist目录下的静态资源文件
// ...

// 监听3000端口
app.listen(4001);
console.log('success listen......');
