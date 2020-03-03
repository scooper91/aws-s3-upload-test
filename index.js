'use strict';
const {createReadStream} = require('fs');
const {S3} = require('aws-sdk');
const s3 = new S3();

function getObject(key) {
  return s3.listObjectsV2({
    Bucket: process.env.BUCKET,
    Prefix: key,
  }).promise();
}

(async () => {
  const key = `test-${Math.random()}`;

  const stream = createReadStream('test.file');
  setTimeout(() => stream.destroy(new Error('bang')), 50);

  try {
    await s3.upload({
      Bucket: process.env.BUCKET,
      Key: key,
      Body: stream
    }).promise();
  }
  catch {
    console.log(new Date(), 'in catch:', await getObject(key)); // no contents

    setTimeout(async () =>
      // object now there!
      console.log(new Date(), 'in catch, after a while:', await getObject(key)),
      100
    );
  }
})();
