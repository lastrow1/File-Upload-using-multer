import  express from "express";
import routes from './routes/fileRoutes.js'
import conncetDB  from './config/db.js';
const app = express();

// Coonect to Databse
conncetDB();

// Template engine
app.set('view engine', 'ejs');

// set Public Folders
app.use(express.static('public'))

// Ser Routes
app.use(routes);

app.listen(2000, ()=>{
    console.log('App running on Port : 2000');
})