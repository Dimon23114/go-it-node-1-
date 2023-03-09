const {program} = require('commander');
const { listContacts, getContactById, addContact, removeContact } = require("./contacts/contacts")


program
  .name('CLI додаток')
  .description('Some conact list our friends')
  .version('1.0.0')
program
  .option('--method <method>', 'Action to perform')
  .option('--id <type>', 'user id')
  .option('--name <type>', 'user name')
  .option('--email <type>', 'user email')
  .option('--phone <type>', 'user phone'); 
program.parse(process.argv);
const { method, id, name , email, phone } = program.opts();
console.log(method, id, name , email, phone);

(async ({ method, id, name, email, phone }) =>{

  if (method === 'list'){
    const result = await listContacts()
    console.log(result);
  }
  if (method === 'get'){
    const result = await getContactById(id)
    console.log(result);
  }
  if (method === 'remove'){
    const result = await removeContact()
    console.log(result);
  }
  if (method === 'add'){
    const result = await addContact(name, email, phone)
    console.log(result);
  }
})();