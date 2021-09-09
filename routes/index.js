const express = require('express');
const Busboy = require('busboy');
const { uploadToS3 } = require('../amazon/fileUploadToS3')
const router = express.Router();

const BUCKET_NAME = '';
/* GET home page. */
router.get('/', function (req, res, next) {

  res.send('hey there!')
});

router.post('/api/upload', function (req, res, next) {
  const busboy = new Busboy({ headers: req.headers });

  /**  we can fetch bucket name form req body
   *  to send uplpodToS3() method for uplod image to crossponding bucket **/
  let bucketNameFromBody = req.body.bucketName


  busboy.on('finish', function () {

    // Grabs your file object from the request.
    const file = req.files.element2;
    // Begins the upload to the AWS S3
    uploadToS3(BUCKET_NAME, file);
  });

  req.pipe(busboy);
});


module.exports = router;
