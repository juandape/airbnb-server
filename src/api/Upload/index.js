const { Router } = require('express');
const multer = require('multer');

const { uploadSingleImg, uploadMultipleImg } = require('./upload.controller');

const router = Router();
const upload = multer({
  dest: './temp',
});

router.post('/file', upload.single('file'), uploadSingleImg);
router.post('/files', upload.array('files'), uploadMultipleImg);

module.exports = router;
