import {PersonConstruct, BusinessConstruct} from './views/personAndBusinessConstruct'

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
 * africanMenu
 * 
 * @interface a blockchain platform where African restaurants present menu items and African food 
 * lovers buy food directly from their menu.
 *
 * @param secureLogin A secure way for customors to authenticate their account on the platform
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

const africanMenu = (secureLogin, secureTransactions) => {
    let personalInfo = new PersonConstruct('', '', '', '', addrs, addrs, sLinks)
    let businessInfo = new BusinessConstruct('', '', '', '','','','','', addrs, addrs, sLinks)
    let crudSASS = {
        create: _.forEach(businessInfo, function (value) {
            return (value) => { this.create(value) }
        }
        ),
        read: _.forEach(businessInfo, function (value) {
            return (value) => { this.read(value) }
        }
        ),
        update: _.forEach(businessInfo, function (value) {
            return (value) => { this.update(value) }
        }
        ),
        delete: _.forEach(businessInfo, function (value) {
            return (value) => { this.delete(value) }
        }
        ),
        store: _.forEach(businessInfo, function (value) {
            return (value) => { this.store(value) }
        }
        ),
        authenticate: _.forEach(businessInfo, function (value) {
            return (value) => { this.authenticate(value) }
        }
        ),
        secure: _.forEach(businessInfo, function (value) {
            return (value) => { this.secure(value) }
        }
        ),
        share: _.forEach(businessInfo, function (value) {
            return (value) => { this.share(value) }
        }
        ),
    }
};
let crudSASSPersonalInfo = personalInfo





