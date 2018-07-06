- What: An operation that allows users to Copy, Read, Update, Delete, Store, Authenticate, Secure, and Share data.
- Why:  Transacting data by utilizing crudSAS operations is a functional goal of Yukits
- Who: Osayuki Bigie +
- When: 07/02/2018
- Where: Houston, TX
- How: crudSASS: [Create, Read, Update, Delete, Store, Authenticate, Secure, Share]

let crudSASS = {
create: ()=> create,
read: ()=> read,
update: ()=> update,
delete: ()=> delete,
store: ()=> store,
authenticate: ()=> authenticate,
secure: ()=> secure,
share: ()=> share
    }

modules.exports( crudSASS );
