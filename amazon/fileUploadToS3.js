const AWS = require('aws-sdk');


const IAM_USER_KEY = '';
const IAM_USER_SECRET = '';


 function uploadToS3(bucketName,file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: bucketName
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: bucketName,
        Key: file.name,
        Body: file.data
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}
module.export = { uploadToS3 };