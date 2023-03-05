const {program} = require('commander');
const { listContacts, getContactById, addContact, removeContact } = require("./contacts/contacts")


program
  .name('CLI додаток')
  .description('Some conact list our friends')
  .version('1.0.0')
program
  .option('-m, --method <method>', 'Action to perform')
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone"); 
program.parse(process.argv);
const { a, i, n , e, p } = program.opts();
console.log(a, i, n , e, p);

(async () =>{
  if(method === 'list'){
    const result = await listContacts()
    console.log(result);
  }
  if(method === 'get'){
    const result = await getContactById(id)
    console.log(result);
  }
  if(method === 'remove'){
    const result = await removeContact()
    console.log(result);
  }
  if(method === 'add'){
    const result = await addContact(name, email, phone)
    console.log(result);
  }
})