- What: An operation that allows users to Copy, Read, Update, Delete, Store, Authenticate, and Secure data.
- Why:  Transacting data by utilizing crudSAS operations is a functional goal of Yukits
- Who: Osayuki Bigie + 
- When: 07/02/2018
- Where: Houston, TX
- How: 

const personalInfo = require('personalInfo')
const businessInfo = require('businessInfo')

const crudSASS = [Create, Read, Update, Delete, Store, Authenticate, Secure, Share]


let hyperLedgerPlatform = {

personalInfo: crudSASS.map(()=> personalInfo ),
businessInfo: crudSASS.map(()=> businessInfo )

    }

modules.exports( hyperLedgerPlatform );

