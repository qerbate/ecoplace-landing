const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err) => {
  
  if (!err) { console.log('MongoDB connection ');}
  else {console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }

} );
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0)
})

require('./user');