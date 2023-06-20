const User = require('../../../models/user');
const logger = require('../../../config/winston-error-logger');
const jwt = require('jsonwebtoken');

//Creating USER
module.exports.createUser = async (req, res) => {
    try {
        const {name, email, phone, password} =req.body; //Destructuring
        //Handeling if USER forget to fill field
        if(!name || !email || !phone || !password) {
           
            return res.status(401).json({
                success: false,
                message: 'Please fill all fields!'
            })
        }
        //Handeling if USER already exists
        const user = await User.findOne({email: req.query.email});
        if(user) {
            return res.status(401).json({
                success: false,
                message: 'User already exists!'
            })
        } else {
            //Creating User if USER not exists
            const newUser = await User.create({
                name: name,
                email: email,
                phone: phone,
                password: password
            })
            return res.status(200).json({
                success: true,
                message: 'New User Created Successfully!',
                data: newUser
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

//LOGGING-IN User 
module.exports.signInUser = async (req, res) => {
    try {
        const {email, password} = req.body //Destructuring

        //Handeling if USER forgot to fill email, password
         if(!email || !password) {
            return res.status(401).json({
                success: false,
                message: 'Please fill all fields!'
            })
         }

         //Finding USER in DataBase
         const user = await User.findOne({email: email});

         //Handeling if USER not Exists
         if(!user) {
            return res.status(401).json({
                success: false,
                message: 'User not exists!'
            })
         } else {
            //Creating TOKEN if USER Exists
             const token = jwt.sign(user.toJSON(), process.env.secretKey, {expiresIn: '48h'});
             return res.status(200).json({
                success: true,
                message: 'User Siggned-In Successfully! Please Do not Share this token with anyone!',
                data: user,
                token
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

