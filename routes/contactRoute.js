var express = require('express');
const { isAuth } = require('../middlewares/index');
const { getContacts, createContact, getContactById, deleteContactById, updateContactById } = require('../controllers/contactController');
var router = express.Router();

router.get('/all-contacts', isAuth, getContacts)
router.post('/create-contact', isAuth, createContact)
router.get('/get-contact/:id', isAuth, getContactById)
router.delete('/delete-contact/:id', isAuth, deleteContactById)
router.patch('/update-contact/:id', isAuth, updateContactById)

module.exports = router;
