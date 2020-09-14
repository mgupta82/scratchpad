npm install -g serverless

aws configure

sls create --template aws-nodejs

npm install

sls deploy

sls invoke -f hello

sls remove