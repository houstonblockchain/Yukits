/**
 * A function that is used to return a formatted address from an address object
 * 
 * @param {Object} obj address with the following properties:
 * * <String> street,
 * * <String> unitNumber,
 * * <String> city,
 * * <String> State,
 * * <String> zipCode,
 * * <String> country
 *
 */
const addressFormat = function (obj) {
    //Returns an address with unit number if one is provided
    if (obj.address.unitNumber) {
        return obj.address.street + ',' + ' ' + 'Unit #' + obj.address.unitNumber + '\n'
            + obj.address.city + ' ' + obj.address.State + ' ' + obj.address.zipCode;
    }
    // Returns an address without unit number if none is provided
    else {
        return obj.address.street + '\n'
            + obj.address.city + ' ' + obj.address.State + ' ' + obj.address.zipCode;
    };
};