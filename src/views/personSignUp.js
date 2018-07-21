/**
 * Use: To help users get signedup for service.
 * Signup flow => 
 * * 1) User goes to hyperledger powered platform signup page,
 * * 2) User is advised of uport's security advantage and is provided a download link
 * * 3) User is provided instructions on how to do initial uport setup
 * * 4) User returns to african menu platform
 * * 5) A button is provided that asks user to click to connect hyperledger to uport
 * * 6) The page also displays information that will be requested right away from user
 * * 7) Information requested are:
 * * 7a) Name eg: 'Osayuki Bigie' // Will be split into first and last later on
 * * 7b) email eg: 'yukitrucks@gmail.com'
 * * 7b) phone eg: '4692692000'
 * * 8) User's MNID (returned json key = 'address') is also captured in the request phase 
 * * 9) User's MNID is used to push the personal information sign up form to user
 * * 10) as  begins filling out personal information form
 * * 11) => Username: 'USER_CHOOSES' // This checked for duplicates
 * * 12) => Personal Information: {
 *          First Name: Show suggested from recieived during request (User can change if they want),
 *          Last Name: Show suggested from recieived during request (User can change if they want),
 *          Email: Show suggested from recieived during request (User can change if they want),
 *          Phone Number: Show suggested from recieived during request (User can change if they want),
 *      }
 * * 13) => Personal Address: {
 *          Street: street address,
 *          Unit Number: Unit number,
 *          City: City,
 *          State: State,
 *          Zip Code: Zip Code,
 *          Country: Country,
 *      }
 * * 14) => Personal Mailing Address: {
 *          Street: street address,
 *          Unit Number: Unit number,
 *          City: City,
 *          State: State,
 *          Zip Code: Zip Code,
 *          Country: Country,
 *      }
 * * 15) => Personal Social Links: {
 *          Street: street address,
 *          Unit Number: Unit number,
 *          City: City,
 *          State: State,
 *          Zip Code: Zip Code,
 *          Country: Country,
 *      }
 * * 16) => Authorize: 'Grant Authority' // Will be used in crudSSrH Operations
 */

