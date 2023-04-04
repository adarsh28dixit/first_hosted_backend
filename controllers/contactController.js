const Contact = require('../models/contactModel');

const getContacts = async (req, res) => {
    let response = await Contact.find({});
    if (response) {
        res.send(response);
    } else {
        res.send("error")
    }
}

const createContact = async (req, res) => {
    try {
        const { name, contact } = req.body;

        const contacts = await Contact.insertMany({ name, contact });

        res.status(201).json(contacts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getContactById = async (req, res) => {
    try {
        const id = req.params.id;

        const contact = await Contact.find({ _id: id });

        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;


        // console.log(updates,'srdtfgyhj')
        const contact = await Contact.findByIdAndUpdate(id, updates, { new: true });

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getContacts, createContact, getContactById, deleteContactById, updateContactById }