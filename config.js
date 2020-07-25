require('dotenv').config();
const DBNAME = 'todo';
module.exports= {
   PORT: process.env.PORT || 5555,
   DBNAME,
   APPNAME: 'Todo',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,  
}