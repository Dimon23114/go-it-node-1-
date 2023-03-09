const fs = require ("fs/promises");
const path = require("path");
const crypto = require('crypto');


const contactPath = path.resolve(__dirname, "..", "db", "contacts.JSON")



/**
 * @param {function} ListContact(gived for us contact list;)   
 * @param {function} getContactById(we can find some contact by ID;) 
 * @param {function} removeContact(help us for delete some contact;)
 * @param {function} addContact(help us for added a new contact;)
 */


const listContacts = async () =>  {
    try {
        const rawData = await fs.readFile(contactPath, 'utf-8');
        return JSON.parse(rawData)
    }
    catch (err) {
        console.log(error);
    }
  }

const getContactById = async (id) =>  {
    try {
        const findById = await listContacts();
        const findID = findById.find(contact =>String(contact.id) === String(id))
    }
    catch (err) {
      console.error('Контакт не знайдено');
    }
  };
const removeContact = async (id) =>  {
    try {
      const findById = await listContacts();
      const newListContact =listContacts.filter(contact => String(contact.id) !== String(id));
      await fs.writeFile(contactPath, JSON.stringify(newlistContacts, null, 2))
       return newContact;
      }
    catch (err) {
      console.log(`Контакт з ідентифікатором ${contactId} був успішно видалений`);
          }
      }
      
 const addContact = async (name, email, phone) =>  {
    try {   
       const generateId =crypto.randomUUID();
       const findById = await listContacts();
       const newContact = (id, name, email, phone);
       listContacts.push(newContact);
       await fs.writeFile(contactPath, JSON.stringify(listContacts, null, 2))
       return newContact;
        }
    catch (err) {
      console.log(`Контакт з ідентифікатором ${contactId} був успішно доданий`);
        }
          }

module.exports = { listContacts, getContactById, addContact, removeContact };