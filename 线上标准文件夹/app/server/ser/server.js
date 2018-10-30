const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken'); // 使用jwt签名
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MemoryStore = require('session-memory-store')(session);
const proxy = require('http-proxy-middleware');
const app = express();
const http = require('http');  
const qs = require('querystring'); 
const server = app.listen(process.env.NODE_PORT);

app.use(bodyParser.json({limit:'50mb'}));

app.use(bodyParser.urlencoded({ extended: true,limit:'50mb'}));

app.post('/api/auth/login', function (appReq, res) {
    //用户名+密码 发送给后台
    
    userInfos = {"loginName":appReq.body.loginName,"password":appReq.body.password};
    // console.log(JSON.stringify(userInfos));
    var content = JSON.stringify(userInfos);
    var options = {
        hostname: process.env.ZUUL_HOST,  //服务器id
        port: process.env.ZUUL_PORT,    //服务器端口号
        path: '/peak-resource/v1/resource/users',
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json;charset=utf-8'  
        }  
    };
      
    var req;
    req = http.request(options, function (e) {
        e.setEncoding('utf8');
        e.on('data', function (user) {
            //根据后端返回值，判断用户名和密码
            user=JSON.parse(user);
            console.log("user",user)
            if(user.code == "200"){
                // 将用户名通过jwt加密token
                var token = jwt.sign({ name: appReq.body.loginName }, 'secret', {
                    expiresIn: 60 * 60 * 24// 授权时效24小时
                });
                res.json({
                    "code": "200",
                    "reason": "",
                    "result": {
                        "token": token
                    }
                });
            }
            else {
                res.json(user)
            }  
        });
    });  
      
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);  
    });  
      
    // write data to request body  
    req.write(content);  
      
    req.end();  
    
})

//拦截所有/api请求添加头信息后转发
app.all('/api\*', function (req, res) {
    let appId = process.env.AUTH_ID;
    let token = req.headers.authorization;
    if(token){
        // 解码 token (验证 secret 和检查有效期（exp）)
        jwt.verify(token,'secret',function(error,decoded){
           if(error){
               return res.json({"code": "401","reason":"无效的token","result":""})
           }else{
            req.decoded=decoded;
           }
        })
    }else{
        return res.json({"code": "401","reason":"没有找到token","result":""})
    }
    let superagent = require('superagent');
    res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
    let path = req.path.replace('/api', '');
    let url = process.env.ZUUL_URL + path;
    var sreq;
    if (req.method == 'GET') {
        sreq = superagent.get(url);
        sreq
            .query(req.query);
    } else if (req.method == 'HEAD') {
        sreq = superagent.head(url);
        sreq
            .query(req.query)
    } else if (req.method == 'POST') {
        sreq = superagent.post(url);
        sreq
            .send(req.body);
    } else if (req.method == 'PUT') {
        sreq = superagent.put(url);
        sreq
            .send(req.body);
    } else if (req.method == 'PATCH') {
        sreq = superagent.patch(url);
        sreq
            .send(req.body);
    }
    sreq
        .set('AUTH_ID', appId)
        .set('AUTH_USER', req.decoded.name)
        .pipe(res)
        .on('end', function () {
            console.log(`请求${path}已完成！`);
        });
});
//静态页面的入口文件夹
app.use(express.static(path.join(__dirname, 'dist')));
//把路由交给angular管理
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
