const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//@desc Get single contact
//@route Get /api/contacts/:id
//@access public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact details for ${req.params.id}` });
});

//@desc create contact
//@route Post /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all feilds are mandatory");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//@desc update contact
//@route Put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});

//@desc delete contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
