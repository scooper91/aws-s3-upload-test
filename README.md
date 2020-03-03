# AWS S3 Upload Test

Repo created for [AWS JS SDK issue](https://github.com/aws/aws-sdk-js/issues/3106).

## Requirements

 - Docker
 - S3 bucket
 - AWS credentials with access to put and list objects in the bucket

## Run

`BUCKET=<some-bucket> AWS_ACCESS_KEY_ID=<aws-key> AWS_SECRET_ACCESS_KEY=<aws-secret> make run`
