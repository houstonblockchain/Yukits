- What: An operation that allows users to WithdrawFunds, CancelOrder, Promote, OfferPromoPrice, Refund.
- Why:  So that users can manage their operations
- Who: Osayuki Bigie + 
- When: 07/03/2018
- Where: Houston, TX

from crudSASS import [create, read, update, delete, store, authenticate, secure, store, and share]
let transactions = [pay, cancelOrder, rate, promote, addToCart, useCoupon]


let transactionsFunctions = {
createTransaction: ()=> {transactions.map(transactionsAction => create(transactionsAction)},
readTransaction: ()=> {transactions.map(transactionsAction => read(transactionsAction)},
updateTransaction: ()=> {transactions.map(transactionsAction => update(transactionsAction)},
deleteTransaction: ()=> {transactions.map(transactionsAction => delete(transactionsAction)},
storeTransaction:()=> {transactions.map(transactionsAction => store(transactionsAction)},
authenticateTransaction: ()=> {transactions.map(transactionsAction => authenticate(transactionsAction)},
secureTransaction: ()=> {transactions.map(transactionsAction => secure(transactionsAction)},
    }

modules.exports(transactionsFunctions);
