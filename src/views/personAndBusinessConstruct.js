
/**
 * Creates a person object
 *
 * @constructor PersonConstruct
 *
 * @param {string} firstName First name of the person
 *
 * @param {string} lastName Last name of the person
 *
 * @param {string} email Email of the person
 *
 * @param {number} phoneNumber Phone number of the person
 *
 * @param {Object} address Personal address
 * @param {string} address.street - Street address
 * @param {string} [address.unitNumber] - Unit number, if any
 * @param {string} address.city - City
 * @param {string} address.state - State
 * @param {string} address.zipCode - Zip code
 * @param {string} address.country - Three letter country name, eg USA
 *
 * @param {Object} [mailingAddress] Personal Mailing address
 * @param {string} mailingAddress.street - Street Mailing address
 * @param {string} [mailingAddress.unitNumber] - Unit number, if any
 * @param {string} mailingAddress.city - City
 * @param {string} mailingAddress.state - State
 * @param {string} mailingAddress.zipCode - Zip code
 * @param {string} mailingAddress.country - Three letter country name, eg USA
 *
 * @param {Object} socialMediaLinks Personal Social media links
 * @param {string} [socialMediaLinks.youtube] - youtube link, if any
 * @param {string} [socialMediaLinks.tweeter] - tweeter link, if any
 * @param {string} [socialMediaLinks.facebook] - facebook link, if any
 * @param {string} [socialMediaLinks.instagram] - instagram link, if any
 * @param {string} [socialMediaLinks.snapchat] - snapchat link, if any
 * @param {string} [socialMediaLinks.whatsApp] - whatsApp link
 *
 * @param {Object} authorize Login into site
 * @param {string} authorize.userName Personal Login/SignIn userName
 * @param {string} authorize.authority Personal authority
 *
 * @param {Object} crudSSrH Information access control
 * works by using credentials.createRequest to request
 * permission from the user.  Eg. A user fills out a form
 * online.  And the fields within the form can be crudSASS'ed.
 * @param {boolean} [crudSSrH.createPermission] - Create Permission
 * @param {boolean} [crudSSrH.readPermission] - Read Permission
 * @param {boolean} [crudSSrH.deletePermission] - Delete Permission
 * @param {boolean} [crudSSrH.sharePermission] - Share Permission
 * @param {boolean} [crudSSrH.storePermission] - Store Permission
 * @param {boolean} [crudSSrH.readHashPermission] - Read only the hash of the Permission
 *
 * @returns {PersonConstruct} Person instance
 *
 * @example
 * let persAddress = {
    street: "1177 Westheimer Road",
    unitNumber: "100",
    city: "Houston",
    State: "Texas",
    zipCode: "77077",
    country: "USA"
    }
    let socialLinks = {
    youtube: 'www.youtube.com',
    tweeter: 'www.tweeter.com',
    facebook: 'www.facebook.com',
    instagram: 'www.instagram.com',
    snapchat: 'www.snapchat.com',
    whatsApp: 'www.whatsApp.com'
    }
    const person = new PersonConstruct(
        'Osayuki',
        'Bigie',
        'yukitrucksATgmail.com',
        '4692692000',
        persAddress,
        persAddress,
        socialLinks
    );
 */

function PersonConstruct(
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    mailingAddress,
    socialMediaLinks,
    authorize,
    crudSSrH
) {
    this.firstName = firstName;
    this.lastName = lastName;
    // /**
    // * Method to create fullName from firstName and lastName
    // * @method fullName
    // */
    //this.fullName = function () {
    //    return this.firstName + " " + this.lastName;
    //};
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.mailingAddress = mailingAddress;
    this.socialMediaLinks = socialMediaLinks;
    this.authorize = authorize;
    this.crudSSrH = crudSSrH;
}

/**
 * Creates a business object
 *
 * @constructor BusinessConstruct
 *
 * @param {string} licenseNumber License Number of the business
 *
 * @param {string} licenseCategory License Category of the business
 *
 * @param {string} legalName Legal Name of the business
 *
 * @param {string} dba Doing Business As name of the business
 *
 * @param {string} email Email of the business
 *
 * @param {number} phoneNumber Phone number of the business
 *
 * @param {string} businessCategory Business Category
 *
 * @param {string} businessSubCategory Business Subcategory
 *
 * @param {Object} address Busines address
 * @param {string} address.street - Street address
 * @param {string} [address.unitNumber] - Unit number, if any
 * @param {string} address.city - City
 * @param {string} address.state - State
 * @param {string} address.zipCode - Zip code
 * @param {string} address.country - Three letter country name, eg USA
 *
 * @param {Object} mailingAddress Busines mailing address
 * @param {string} mailingAddress.street - Street Mailing address
 * @param {string} [mailingAddress.unitNumber] - Unit number, if any
 * @param {string} mailingAddress.city - City
 * @param {string} mailingAddress.state - State
 * @param {string} mailingAddress.zipCode - Zip code
 * @param {string} mailingAddress.country - Three letter country name, eg USA
 *
 * @param {Object} authorize Login into site
 * @param {string} authorize.userName Business Login/SignIn userName
 * @param {string} authorize.authority Business authority
 *
 * @param {Object} crudSSrH Information access control
 * works by using credentials.createRequest to request
 * permission from the user.  Eg. A user fills out a form
 * online.  And the fields within the form can be crudSASS'ed.
 * @param {boolean} [crudSSrH.createPermission] - Create Permission
 * @param {boolean} [crudSSrH.readPermission] - Read Permission
 * @param {boolean} [crudSSrH.deletePermission] - Delete Permission
 * @param {boolean} [crudSSrH.sharePermission] - Share Permission
 * @param {boolean} [crudSSrH.storePermission] - Store Permission
 * @param {boolean} [crudSSrH.readHashPermission] - Read only the hash of the Permission
 *
 *
 * @param {Object} socialMediaLinks Business social media links
 * @param {string} [socialMediaLinks.youtube] - youtube link, if any
 * @param {string} [socialMediaLinks.tweeter] - tweeter link, if any
 * @param {string} [socialMediaLinks.facebook] - facebook link, if any
 * @param {string} [socialMediaLinks.instagram] - instagram link, if any
 * @param {string} [socialMediaLinks.snapchat] - snapchat link, if any
 * @param {string} [socialMediaLinks.whatsApp] - whatsApp link
 *
 * @returns {BusinessConstruct} Business instance
 *
 * @example
 * let bizAddress = {
    street: "1177 Westheimer Road",
    unitNumber: "100",
    city: "Houston",
    state: "Texas",
    zipCode: "77077",
    country: "USA"
    }
    let bizSocialLinks = {
    youtube: 'www.youtube.com',
    tweeter: 'www.tweeter.com',
    facebook: 'www.facebook.com',
    instagram: 'www.instagram.com',
    snapchat: 'www.snapchat.com',
    whatsApp: 'www.whatsApp.com'
    }
    const business = new BusinessConstruct(
        '2380234dcd-ad',
        'Service',
        'Yuki Truck Services',
        'Yuki Truck Services',
        'yukitrucksATgmail.com',
        4692692000,
        "Restaurant",
        "African",
        bizAddress,
        bizAddress,
        bizSocialLinks
    );
 */

function BusinessConstruct(
    licenseNumber,
    licenseCategory,
    legalName,
    dba,
    email,
    phoneNumber,
    businessCategory,
    businessSubCategory,
    address,
    mailingAddress,
    socialMediaLinks
) {
    this.licenseNumber = licenseNumber;
    this.licenseCategory = licenseCategory;
    this.legalName = legalName;
    this.dba = dba;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.businessCategory = businessCategory;
    this.businessSubCategory = businessSubCategory;
    this.address = address;
    this.mailingAddress = mailingAddress;
    this.socialMediaLinks = socialMediaLinks
}

module.exports = {
    PersonConstruct,
    BusinessConstruct
}