const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('./config/winston-error-logger');

const port = process.env.port;
const app = express();

app.use(express.urlencoded());

app.use('/', require('./routers'));



// Firing server once we ensure that successful connection with DataBase
module.exports.startServer = async (res) => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`)
         .then(() => {
            console.log('Successfuly connected with DataBase :: MongoDB!')
         })
        .catch(() => {
            console.log('An error occured while connecting with DataBase!')
        })
        app.listen(port, (err) =>{
            if(err) {
                throw new Error(err);
            }
            console.log(`${process.env.environment} server starts at port ${port}`);
        })
    } catch (error) {
       const errMsg = error.message;

        //Generating Error LOGS
        logger.itemsLogger.log('error', errMsg)

       if(process.env.environment == 'production') {

        return res.status(500).json({
            success: false,
            message: 'Internal Server error!'
        })

       } else {

        return res.status(500).json({
            success: false,
            message: errMsg
        })

       }
    }
}