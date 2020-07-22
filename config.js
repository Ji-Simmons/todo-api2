require('dotenv').config();
const dbName = 'todo';
module.exports= {
   PORT: process.env.PORT || 5555,
   dbName,
   APPNAME: 'Todo',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-mznto.mongodb.net/${dbName}?retryWrites=true&w=majority`,

  
}