module.exports = mongoose = (server = localhost, port = 27017, collection) => {
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  var uri = ''
  if(collection){
    uri = `mongodb://${server}:${port}/${collection}`;
  }else{
   uri = `mongodb://${server}:${port}`; 
  }

  let mVer = mongoose.version;
  let mongoOpts;

  if(mVer.match(/^4/)){
    mongoOpts = {useMongoClient: true};
  }else{
    mongoOpts = {}
  }
  mongoose.connect(uri, mongoOpts);
}
