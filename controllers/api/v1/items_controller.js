const Item = require('../../../models/items');
const logger = require('../../../config/winston-error-logger');


//Creating Item -----> C of CRUD -----> REQUEST-POST
module.exports.createItem = async (req, res) => {
    try {
        const {title, qty, price} = req.body; //Destructuring
        //Handeling if item forget to fill field
        if(!title || !qty || !price) {
           
            return res.status(401).json({
                success: false,
                message: 'Please fill all fields!'
            })
        }
        //Handeling if ITEM already exists
        const item = await Item.findOne({title: req.query.title});
        if(item) {
            return res.status(401).json({
                success: false,
                message: 'item already exists!'
            })
        } else {
            //Creating new-ITEM if item not exists
            const newItem = await Item.create({
                title: title,
                qty: qty,
                price: price
            })
            return res.status(200).json({
                success: true,
                message: 'New Item Created Successfully!',
                data: newItem
            })
        }
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

//Getting All ITEMS from DAtaBase ----> R of CRUD ----> REQUEST-GET
module.exports.getItems = async (req, res) => {
    try {

            //Applying Paginations
            let {page, size} = req.query;

            if(!page) {
                page = 1;
            }

            if(!size) {
                size = 2
            }

            const limit = parseInt(size);

            //Finding ITEMS in DataBase
            const items = await Item.find({}).limit(limit);

        //Handeling If not any ITEMS Persent in the DataBase
        if(!items) {
            return res.status(401).json({
                success: false,
                message: 'No any item persent! Please add ittems!!'
            })
        } else {

             //Sending list of all Items if exists
             return res.status(200).json({
                success: true,
                message: 'List of all Items--',
                data: items,
                page,
                size
            })
        }
           
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

//Getting SPECIFIC ITEM by ID
module.exports.getSpecificItem = async (req, res) => {
    try {
        const id = req.params.id;  //Getting ID from PARAMS

        //Finding ITEM in DataBase
        const item = await Item.findById(id);

        //Handeling if Not any iTEM persent for the SPECIFIC ID
        if(!item) {
            return res.status(401).json({
                success: false,
                message: 'No any such Item persent! Please try again!!'
            })
        } else {
            //Handeling if ITEM is persent
            return res.status(200).json({
                success: true,
                message: 'Searched item--',
                data: item
            })
        }
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

//Updating Item ------> U of CRUD ------> REQUEST-PUT
module.exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id;  //Getting ID from PARAMS
        const {title, qty, price} = req.body;

        //Finding ITEM
        const item = await Item.findByIdAndUpdate(id, {
            title: title,
            qty: qty,
            price: price
        })

        //Handeling if ITEM is not exists
        if(!item) {
            return res.status(401).json({
                success: false,
                message: 'No such item persent!'
            })
        } else {
            //Handeling if Item persent
            return res.status(200).json({
                success: true,
                message: 'Updated item--',
                data: item
            })
        }
        
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

//Deleting Item -------> D of CRUD ------> REQUEST- DELETE
module.exports.deleteItem = async (req, res) => {
    try {
        const id = req.params.id; //Geting ID from PARAMS

        //Finding ITEM in DataBase
        const item = await Item.findByIdAndDelete(id);

        //Handeling if ITEM not persent 
        if(!item) {
            return res.status(401).json({
                success: false,
                message: 'No such item persent!'
            })
        } else {
            //Handeling if ITEM persent
            return res.status(200).json({
                success: true,
                message: 'Deleted item--',
                data: item
            })
        }
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