const multer = require("multer");
const path = require("path");
const { BadRequestError } = require("../errors");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new BadRequestError("File upload only supports the following filetypes - " + filetypes));
  },
});

const uploadFile = (name) => {
  return upload.single(name);
};

module.exports = uploadFile;
