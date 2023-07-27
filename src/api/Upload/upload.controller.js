const fs = require('fs');
const { uploadImg } = require('./upload.service');

async function uploadSingleImg(req, res) {
  const { path, size } = req.file;

  const maxSize = 1024 * 1024 * 2;

  if (size > maxSize) {
    fs.unlinkSync(path);
    return res.status(400).json({ message: 'Use only files up to 2mb' });
  }

  try {
    const result = await uploadImg(path);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(path);
  }
}

async function uploadMultipleImg(req, res) {
  const files = req.files;

  if (!files.length) {
    return res.status(400).json({ message: 'No files provided' });
  }

  try {
    const promises = files.map((file) => uploadImg(file.path));

    const results = await Promise.all(promises);

    return res.status(201).json(results);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    files.forEach((file) => fs.unlinkSync(file.path));
  }
}

module.exports = {
  uploadSingleImg,
  uploadMultipleImg,
};
