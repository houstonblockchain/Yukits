- What:  A platform that allows people to order food from any restaurant, securely.
- Why:  Yukits Menu is the most secure and enjoyable experience today because is created from PID Controller
- Who: Osayuki Bigie +
- When: 07/02/2018
- Where: Houston, TX
- How:
from {crudSASS} import [create, read, update, delete, store, secure, and share]

let foodMenuItems = [name, nationalOrigin, description, price, preparationTime, uniqueFact, image]

let foodMenu = {
createFoodMenu: ()=> foodMenuItems. map(foodMenuItem => create(foodMenuItem),
readFoodMenu: ()=> foodMenuItems. map(foodMenuItem => read(foodMenuItem),
updateFoodMenu: ()=> foodMenuItems. map(foodMenuItem => update(foodMenuItem),
deleteFoodMenu: ()=> foodMenuItems. map(foodMenuItem => delete(foodMenuItem),
storeFoodMenu: ()=> foodMenuItems. map(foodMenuItem => store(foodMenuItem),
authenticateFoodMenu: ()=> foodMenuItems. map(foodMenuItem => authenticate(foodMenuItem),
secureFoodMenu: ()=> foodMenuItems. map(foodMenuItem => secure(foodMenuItem),
secureFoodMenu: ()=> foodMenuItems. map(foodMenuItem => share(foodMenuItem),    }

modules.exports( foodMenu );
