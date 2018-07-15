secureLogin


// JWT Uport signed requests can be used to 
// eg credentials.createRequest
// create a request for "credentials".
// credentials can be created for attestation:
// Eg. one can create an attest object that includeds
// * personInfo,
// * then person info can include:
// * personInfo.signInUsername
// * personInfo.signInAuthorizie
// * this will be the signInpart.
// This way if customer changes their uport password,
// then they do not lose their dLedger credentials
// Also person can change their dLedger credentials,
// running a hyperledger update password functions,
// which inturns triggers a signed request to update crede


