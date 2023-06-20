const express = require('express');
const router = express.Router();

const itemController = require('../../controllers/api/v1/items_controller');
const { checkAuthentication } = require('../../config/jwt-autherization');       //Accessing jwt from CONFIG

router.post('/items', checkAuthentication, itemController.createItem);          //Route for Creating ITEM
router.get('/items', checkAuthentication, itemController.getItems);             //Route for Getting All ITEMS
router.get('/items/:id', checkAuthentication, itemController.getSpecificItem);  //Route for Getting Specific ITEM
router.put('/items/:id', checkAuthentication, itemController.updateItem);       //Route for Updating Specific ITEM
router.delete('/items/:id', checkAuthentication, itemController.deleteItem);    //Route for Deleting an ITEM

module.exports = router;