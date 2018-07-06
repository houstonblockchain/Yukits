- What: crudSASSPersonalInfo
- Why:  So that a user can successfully transact their private information
- Who: Osayuki Bigie + 
- When: 07/02/2018
- Where: Houston, TX
- How: crudSASS: [Create, Read, Update, Delete, Store, Authenticate, Secure, Share]

let personalInfo = {

personalInfo: {
name: ()=> name,
email: ()=> email,
phoneNumber: ()=> phoneNumber
},
personalAddress: {
street: ()=> street,
unitNumber: ()=> unitNumber,
city: ()=> city,
states: ()=> states,
zipCode: ()=> zipCode
},
personalMailingAddress: {
street: ()=> street,
unitNumber: ()=> unitNumber,
city: ()=> city,
states: ()=> states,
zipCode: ()=> zipCode
},
personalPayment: ()=> authorizePayment
}

let crudSASSPersonalInfo = ()=> crudSASS.map(personalInfo)

modules.exports(crudSASSPersonalInfo);

