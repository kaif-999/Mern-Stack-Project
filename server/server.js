    const express = require('express')
    const mongoose = require('mongoose');
    const cookieParser = require('cookie-parser');
    const cors = require ('cors');
    // create a database connection u can also 
    // create a seprate file for this and then import / use that file here
    
    mongoose.connect('mongodb+srv://kaif:kaif%40mongodb@cluster0.fnygw.mongodb.net/')
    .then(() => console.log ("MongoDB Connected"))
    .catch((error) => console.log(error));

    const app = express();
    const PORT = process.env.PORT || 500;

    app.use (
cors({
origin : 'http//localhost:5173/',
methods : ['GET', 'POST', 'DELETE', 'PUT'],
AllowHeaders : [
    "Content-Type",
    'Authorization',
    'Cache-Control',
    'Expires',
    'Pragma'], credentials:true    

})
);

app.use (cookieParser());
app.use (express.json());