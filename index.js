module.exports = mongoose = (server = localhost, port = 27017) => {
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  const uri = `mongodb://${server}:${port}`;

  let mVer = mongoose.version;
  let mongoOpts;

  if(mVer.match(/^4/)){
    mongoOpts = {useMongoClient: true};
  }else{
    mongoOpts = {}
  }
  mongoose.connect(uri, mongoOpts);
}
