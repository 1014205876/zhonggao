const fs = require('fs');
const express = require('express');
const multer = require('multer');

const uuid=require('node-uuid');

const router = express.Router();
const storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, 'upload_tmp')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, uuid.v1() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//添加配置文件到muler对象。
const upload = multer({
    storage: storage
});

router.post('/', upload.any(), function (req, res, next) {
    console.log(req.files[0]);
})

module.exports = router;