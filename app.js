const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express ();
const port = 3000;

app.use(morgan('combined'));
app.get("/", (req,res) =>{
    res.send('Hello Borntodev A-nuch');
})
app.listen(port, ()=>{
   // console.log("Listining on port" + chalk.green(" : "+port));
    debug("Listining on port" + chalk.red(" : "+port));
})