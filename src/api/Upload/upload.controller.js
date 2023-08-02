const fs = require('fs');
const { uploadImg } = require('./upload.service');

async function uploadImgFiles(req, res) {
  const files = req.files;

  try {
    const promises = files.map((file) => uploadImg(file.path));

    const results = await Promise.all(promises);

    return res.status(201).json(results);
  } catch (error) {
    return res.status(500).json(error);
  }
  finally {
    files.forEach((file) => fs.unlinkSync(file.path));
  }
}

module.exports = {
  uploadImgFiles,
};
