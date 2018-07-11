/**
 * PersonConstruct creates a person object
 *
 * @constructor A constructor that creates a personal info object
 *
 * @param firstName <String> First name of the person
 *
 * @param lastName <String> Last name of the person
 *
 * @param email <String> Email of the person
 *
 * @param phoneNumber <Number> Phone number of the person
 *
 * @param address <Object> Address with properties:
 * * <String> street,
 * * <String> unitNumber,
 * * <String> city,
 * * <String> state,
 * * <String> zipCode,
 * * <String> country
 *
 * @param mailingAddress <Object> Mailing address with properties:
 * * <String> street,
 * * <String> unitNumber,
 * * <String> city,
 * * <String> state,
 * * <String> zipCode,
 * * <String> country
 *
 * @param socialMediaLinks <Object> Social media links with properties:
 * * <String> youtube,
 * * <String> tweeter,
 * * <String> facebook,
 * * <String> instagram,
 * * <String> snapchat,
 * * <String> whatsApp
 *
 * @example let persAddress = {
    street: "1177 Westheimer Road",
    unitNumber: "100",
    city: "Houston",
    state: "Texas",
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
    const person = new PersonConstruct('Osayuki', 'Bigie', 'yukitrucksATgmail.com', '4692692000', persAddress, persAddress, socialLinks);
 */
function PersonConstruct (firstName, lastName, email, phoneNumber, address, mailingAddress, socialMediaLinks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.mailingAddress =  mailingAddress;
    this.socialMediaLinks =  socialMediaLinks
}

/**
 * BusinessConstruct creates a business object
 *
 * @constructor A constructor that creates a business info object
 *
 * @param licenseNumber <String> License Number of the business
 *
 * @param licenseCategory <String> License Category of the business
 *
 * @param legalName <String> Legal Name of the business
 *
 * @param dba <Number> Doing Business As name of the business
 *
 * @param email <Number> Email of the business
 *
 * @param phoneNumber <Number> Phone number of the business
 *
 * @param businessCategory <Number> Business Category
 *
 * @param businessSubCategory <Number> Business Subcategory
 *
 * @param address <Object> Business address with properties:
 * * <String> street,
 * * <String> unitNumber,
 * * <String> city,
 * * <String> state,
 * * <String> zipCode,
 * * <String> country
 *
 * @param mailingAddress <Object> Business Mailing address with properties:
 * * <String> street,
 * * <String> unitNumber,
 * * <String> city,
 * * <String> state,
 * * <String> zipCode,
 * * <String> country
 *
 * @param socialMediaLinks <Object> Business Social media links with properties:
 * * <String> youtube,
 * * <String> tweeter,
 * * <String> facebook,
 * * <String> instagram,
 * * <String> snapchat,
 * * <String> whatsApp
 *
 * @example let bizAddress = {
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
    const business = new BusinessConstruct('2380234dcd-ad', 'Service', 'Yuki Truck Services', 'Yuki Truck Services', 'yukitrucksATgmail.com', 4692692000, "Restaurant", "African", bizAddress, bizAddress, bizSocialLinks);
 */

function BusinessConstruct (
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
    this.mailingAddress =  mailingAddress;
    this.socialMediaLinks =  socialMediaLinks
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

 const africanMenu  = (secureLogin, secureTransactions) => {
     let personalInfo = {
         name: () => personalInfo.firstName + ' ' + personalInfo.lastName,
         firstName: "",
         lastName: "",
         email: "",
         phoneNumber: "",
         address: "",
         mailingAddress: ""
    }
    let businessInfo = {
        licenseNumber: "",
        licenseCategory: "",
        legalName: "",
        dba: "",
        email: "",
        phoneNumber: "",
        businessCategory: "",
        businessSubCategory: "",
        address: "",
        mailingAddress: ""
    }
    let crudSASS = {
        create:  _.forEach(businessInfo, function(value) {
            return (value) => {this.create(value)}
            }
            ),
        read: _.forEach(businessInfo, function(value) {
            return (value) => {this.read(value)}
            }
            ),
        update: _.forEach(businessInfo, function(value) {
            return (value) => {this.update(value)}
            }
            ),
        delete: _.forEach(businessInfo, function(value) {
            return (value) => {this.delete(value)}
            }
            ),
        store: _.forEach(businessInfo, function(value) {
            return (value) => {this.store(value)}
            }
            ),
        authenticate: _.forEach(businessInfo, function(value) {
            return (value) => {this.authenticate(value)}
            }
            ),
        secure: _.forEach(businessInfo, function(value) {
            return (value) => {this.secure(value)}
            }
            ),
        share: _.forEach(businessInfo, function(value) {
            return (value) => {this.share(value)}
            }
            ),
        }
    };
    let crudSASSPersonalInfo = personalInfo
 




