const mongoose = require('mongoose');

mongoose.connect(process.env.urlDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database conenct')).catch((err) => console.log(err));
