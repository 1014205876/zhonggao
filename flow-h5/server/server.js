const express = require('express');
const path = require('path');
const ConnectCas = require('connect-cas2');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MemoryStore = require('session-memory-store')(session);
const proxy = require('http-proxy-middleware');
const app = express();
const upload = require('./upload');
const server = app.listen(process.env.NODE_PORT);

app.use(cookieParser());
app.use(session({
    name: 'NSESSIONID',
    secret: 'Hello I am a long long long secret',
    resave: true,//添加这行
    saveUninitialized: true,//添加这行
    store: new MemoryStore()  // or other session store
}));

const casClient = new ConnectCas({
    ignore: [
        /\/ignore/
    ],
    match: [],
    servicePrefix: process.env.NODE_SERVER,
    serverPath: process.env.CAS_SERVER,
    paths: {
        validate: '/cas/validate',
        serviceValidate: '/cas/serviceValidate',
        // proxy: '/cas/proxy',
        login: '/cas/login',
        logout: '/cas/logout',
        proxyCallback: ''
    },
    redirect: false,
    gateway: false,
    renew: false,
    slo: true,
    cache: {
        enable: false,
        ttl: 5 * 60 * 1000,
        filter: []
    },
    fromAjax: {
        header: 'x-client-ajax',
        status: 418
    }
});

app.use(casClient.core());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//静态页面的入口文件夹
app.use(express.static(path.join(__dirname, 'dist')));
//文件上传接口
app.use('/file-upload', upload);
//登出cas
app.get('/logout', casClient.logout());
//拦截所有/api请求添加头信息后转发
app.all('/api\*', function (req, res) {
    let superagent = require('superagent');
    //let charset = require("superagent-charset");
    //charset(superagent);
    let path = req.path.replace('/api', '');
    let url = process.env.API_SERVER + path;
    res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
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
        //.charset('utf8')
        .set('AUTH_ID', process.env.AUTH_ID)
        .set('AUTH_USER',encodeURI(req.session.cas.user))
        .pipe(res)
        .on('end', function () {
            console.log(`请求${path}已完成！`);
        });
});



//把路由交给angular管理
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
