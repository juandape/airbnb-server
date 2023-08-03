const { Router } = require('express');
const multer = require('multer');

const { uploadImgFiles } = require('./upload.controller');

const router = Router();
const upload = multer({
  dest: './temp',
});

router.post('/files', upload.array('files'), uploadImgFiles);

module.exports = router;
