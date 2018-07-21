import { PersonConstruct, BusinessConstruct } from './views/personAndBusinessConstruct'

let addrs = {
    street: '',
    unitNumber: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
}

let sLinks = {
    youtube: '',
    tweeter: '',
    facebook: '',
    instagram: '',
    snapchat: '',
    whatsApp: ''
}

/**
 * `crudaoR`:  
 *  what is this  
 *    `['create', 'read','update','delete','obfuscate', 'attest', 'retrieve']`, 
 *  why should I   
 *    ```
 *      { 
 *          'transaction': {
 *              'exchange': {
 *                  } //TODO,
 *              'approve': //TODO,
 *              'voice': //TODO
 *              'research': //TODO,
 *              'complete': // TODO,
 *              'store': //TODO
 *              'draft': //TODO
 *              'search': //TODO
 *          }
 *      }
 *       
 *    ```
 *  when should I  
 *   `['time']`      
 *           ['now', 'later', 'event']
 *  who should 
 *   {
 *     'action',
 *     'actor'
 *    }
 *  where  should I  
 *   `['location']` 
 *  This is the foundation of a cryptographic `agreement` 
 * structure that combines public key
 * and private key technology to deliver a new form of documenting human agreements
 * 
 * @param {Class} hyperLedgerPlatform
 * Providing a platform that allows users to control Create, Read,
 * Update, Delete, Obfuscate, Transact, and Assert
 * their `public information`.
 *
 * @param secureLogin A secure way for customers to authenticate their account on the platform
 * @param secureTransactions A secure way for users to securely transact on the platform
 *
 * @requires uport for secureLogin
 * @requires hyperledgerSawtooth for secureTransactions
 *
 *
 * @returns A crudSASS method for securely interacting on the platform
 * @returns A method that crudSASS personalInfo
 * @returns A method that crudSASS personalTransactions
 * @returns A method that crudSASS businessInfo
 * @returns A method that crudSASS businessTransactions
 */
class hyperLedgerPlatform {

}


/**
 * This object controls all transactions that occur on dLedger
 * It is available to data fields
 * It is called when one desires to interact with the blockchain
 */
const duro = {
    whatIsThis: {

        create: function (privateKey, publicKey, objectType) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToCreate = indexOf(publicKey in objectType.permissions > -1) ? true : false;
            if (permissionToCreate === true)
                return createAndSignTransaction(privateKey);
            return new Error('User not authorized to create this record type')
        },
        read: function (privateKey, publicKey, objectType) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToRead = indexOf(publicKey in objectType.permissions > -1) ? true : false;
            if (permissionToRead === true)
                if (permissionToRead.original)
                return originalINfo
                if (permissionToRead.obfuscate)
                return this.obfuscateInfo
                if (permissionToRead.pseudo)
                return  this.obfuscate.pseudo
            return new Error ('User not authorized to read this record')
        },
        update: function (privateKey, publicKey, updates) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToUpdate = indexOf(publicKey in object.permissions > -1) ? true : false;
            if (permissionToUpdate === true) {
                return updateAndSign(updates)
            } else if (permissionToUpdate === false) {
                console.log ('Unathorized to update')
            } else {
                console.log('No selection')
            }
        },
        delete: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToDelete = indexOf(publicKey in object.deletePermissions > -1) ? 
                deleteObject = 'finalizeRecord' :
                 new Error ('Unauthorized to delete') 
        },
        obfuscate: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToObfuscate = indexOf(publicKey in object.obfuscatePermissions > -1) ? 
                signAction(obfuscateFunction) :
                new Error ('Unauthorized to obfuscate')
        },
        attest: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToAttest = indexOf(publicKey in object.AttestPermissions > -1) ? 
                signAction(attestFunction) :
                new Error ('Unauthorized to Attest')
        },
        retrieve: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToRetrieve = indexOf(publicKey in object.RetrievePermissions > -1) ? 
                signAction(retrieveFunction) :
                new Error ('Unauthorized to Retrieve')
        }
    },
    why: {
        transactionType: {

            exchange: function (privateKey, publicKey, ) {
                let privateKey = getUserPrivateKey;
                let publicKey = getUserPublicKey;
                let permissionToExchange = indexOf(publicKey in object.ExchangePermissions > -1) ? 
                    signAction(exchangeFunction) :
                    new Error ('Unauthorized to Exchange')
            },
            newThing: function (privateKey, publicKey, ) {
                let privateKey = getUserPrivateKey;
                let publicKey = getUserPublicKey;
                let permissionTonewThing = indexOf(publicKey in object.newThingPermissions > -1) ? 
                    signAction(newThingFuntion) :
                    new Error ('Unauthorized to newThing')
            },
            returns: function (privateKey, publicKey, ) {
                let privateKey = getUserPrivateKey;
                let publicKey = getUserPublicKey;
                let permissionToreturns = indexOf(publicKey in object.returnsPermissions > -1) ? 
                    signAction(returnsFuntion) :
                    new Error ('Unauthorized to returns')
            },
            approve: function (privateKey, publicKey, ) {
                let privateKey = getUserPrivateKey;
                let publicKey = getUserPublicKey;
                let permissionToapprove = indexOf(publicKey in object.approvePermissions > -1) ? 
                    signAction(approveFuntion) :
                    new Error ('Unauthorized to approve')
            },
            voice: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTovoice = indexOf(publicKey in object.voicePermissions > -1) ? 
                signAction(voiceFuntion) :
                new Error ('Unauthorized to voice')

            },
            research: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToresearch = indexOf(publicKey in object.researchPermissions > -1) ? 
                signAction(researchFuntion) :
                new Error ('Unauthorized to research')

            },
            complete: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTocomplete = indexOf(publicKey in object.completePermissions > -1) ? 
                signAction(completeFunction) :
                new Error ('Unauthorized to complete')

            },
            store: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTostore = indexOf(publicKey in object.storePermissions > -1) ? 
                signAction(storeFunction) :
                new Error ('Unauthorized to store')

            },
            draft: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTodraft = indexOf(publicKey in object.draftPermissions > -1) ? 
                signAction(draftFunction) :
                new Error ('Unauthorized to draft')

            },
            search: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTosearch = indexOf(publicKey in object.searchPermissions > -1) ? 
                signAction(searchFunction) :
                new Error ('Unauthorized to search')

            }
        }
    },

    when: {
        time: {
            now: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToNow = indexOf(publicKey in object.nowPermissions > -1) ? 
                signAction(nowFunction) :
                new Error ('Unauthorized to now')

            },
            later: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTolater = indexOf(publicKey in object.laterPermissions > -1) ? 
                signAction(laterFunction) :
                new Error ('Unauthorized to later')

            },
            event: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToevent = indexOf(publicKey in object.eventPermissions > -1) ? 
                signAction(eventFunction) :
                new Error ('Unauthorized to event')

            }
        }
    },
    who: {
        action: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToAction = indexOf(publicKey in object.actionPermissions > -1) ?
                signAction(eventFunction) :
                new Error ('Unauthorized to action')

        },
        actor: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionToActor = indexOf(publicKey in object.actorPermissions > -1) ?
                signAction(actorFunction) :
                new Error ('Unauthorized to actor')

        }
    },
    where: {
        location: function (privateKey, publicKey, ) {
            let privateKey = getUserPrivateKey;
            let publicKey = getUserPublicKey;
            let permissionTolocation = indexOf(publicKey in object.locationPermissions > -1) ? 
                signAction(locationFunction) :
                new Error ('Unauthorized to location')

        }
    }
}