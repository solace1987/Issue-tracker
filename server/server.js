import config from './config'
import mongoose from 'mongoose'
import app from './express'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection=mongoose.connection;
connection.once('open',()=>console.log('MondoDb connection established successfully'))
connection.on('error',()=>{
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
})

app.listen(config.port, (err) => {
  if (err) {
  console.log(err)
  }
  console.info('Server started on port %s.', config.port)
  })