- What: crudSASSBusinessInfo
- Why:  So that a user can successfully transact their private information
- Who: Osayuki Bigie + 
- When: 07/02/2018
- Where: Houston, TX

- How: crudSASS: [Create, Read, Update, Delete, Store, Authenticate, Secure, Share]


let businessInfo = {

businessInfo: {
licenseNumber: ()=> licenseNumber,
licenseCategory: ()=> licenseCategory,
legalName: ()=> legalName,
dba: ()=> dba,
email: ()=> email,
phoneNumber: ()=> phoneNumber,
businessCategory: ()=>businessCategory, // In this case restaurant (only)
businessSubCategory: ()=>businessSubCategory , // Nigerian, Ethiopian, Kenyan, etc
},
businessAddress: {
street: ()=> street,
unitNumber: ()=> unitNumber,
city: ()=> city,
states: ()=> states,
zipCode: ()=> zipCode
},
businessMailingAddress: {
street: ()=> street,
unitNumber: ()=> unitNumber,
city: ()=> city,
states: ()=> states,
zipCode: ()=> zipCode
}
}

let crudSASSBusinessInfo = ()=> crudSASS.map(businessInfo)

modules.exports(crudSASSBusinessInfo);


