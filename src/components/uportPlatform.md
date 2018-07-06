- What: An authentication component that allows users to perform crudSAS operations.
- Why:  Uport is one the most secure way to authenticate a user.
- Who: Osayuki Bigie + 
- When: 07/02/2018
- Where: Houston, TX
- How: 

from {crudSASS}import [Create, Read, Update, Delete, Store, Authenticate, Secure, Share]

let uportPlatform = {
createPersonal: ()=> createPersonal,
readPersonal: ()=> readPersonal,
updatePersonal: ()=> updatePersonal,
deletePersonal: ()=> deletePersonal,
storePersonal: ()=> storePersonal,
authenticatePersonal: ()=> authenticatePersonal,
securePersonal: ()=> securePersonal,
createBusiness: ()=> createBusiness,
readBusiness: ()=> readBusiness,
updateBusiness: ()=> updateBusiness,
deletePersonal: ()=> deletePersonal,
storeBusiness: ()=> storeBusiness,
authenticateBusiness: ()=> authenticateBusiness,
secureBusiness: ()=> secureBusiness,
shareBusiness: ()=> shareBusiness
    }

modules.exports(uportPlatform);