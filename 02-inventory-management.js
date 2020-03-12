//view the inventory function
function view(inventory) {
    'use strict';
    let i;
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i].sku + '\t' + 
                           inventory[i].product + '\t' + '(' +
                           inventory[i].quantity + ')' + '\t' + '$' +
                           inventory[i].cost)  
    }
}
//multidimensional array
function getInventory() {
    const shirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory;
    //shirt
    shirt.sku = 4824;
    shirt.product = 'Shirt';
    shirt.quantity = 10;
    shirt.cost = 15.99;
    //jeans
    jeans.sku = 5637;
    jeans.product = 'Jeans';
    jeans.quantity = 27;
    jeans.cost = 29.99;
    //jacket
    jacket.sku = 2355;
    jacket.product = 'Jacket';
    jacket.quantity = 14;
    jacket.cost = 44.99;
    //hat
    hat.sku = 8675;
    hat.product = 'Hats';
    hat.quantity = 45;
    hat.cost = 10.99;
    //socks
    socks.sku = 1123;
    socks.product = 'Socks';
    socks.quantity = 53;
    socks.cost = 9.99;
    inventory = [shirt, jeans, jacket, hat, socks];
    return inventory;

}
//update stock function
function update(inventory) {
    'use strict';
    let itemSku = Number(window.prompt('Enter the SKU you wish to update.'));
    for (let i = 0; i < inventory.length; i += 1) {
    // window.console.log(itemSku, typeof itemSku);
        if (itemSku == inventory[i].sku) {
        var newQ = window.prompt('Enter new quantity of stock');
          if (inventory[i].quantity = newQ) {
            window.console.log('The new quantity is ' + inventory[i].quantity);
            } else {
            break;
            }  
        }
    }
}
//display the commands
function displayMenu() {
    'use strict';
    window.console.log('Inventory Management System');
    window.console.log('');
    window.console.log('COMMAND MENU');
    window.console.log('View - View All inventory');
    window.console.log('Update - Update Stock');
    window.console.log('Exit - Exit the program');
    window.console.log('');
}
//primary function/ inventory List
window.addEventListener('load', () => {
    let inventory, command;
    displayMenu();
    inventory = getInventory();
    while (true) {
        command = window.prompt('Enter command');
        if (command !== null) {
            if (command === 'View') {
                view(inventory);
            } else if (command === 'Update') {
                update(inventory);
            } else if (command === 'Exit') {
                break;
            } else {
                window.alert('That is not a valid command.');
            }
        } else {
            break;
        }
    }
    window.console.log('Program terminated.');
});
