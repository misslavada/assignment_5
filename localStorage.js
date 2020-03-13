//multidimensional array
function getInventory() {
    'use strict'
    let storage;
    let inventory;
    storage = localStorage.getItem('inventoryList') || '';
        window.console.log(localStorage);
        if (storage.length > 0) {
            inventory = storage.split('|');
        for (i in inventory) {
            inventory[i] = inventory[i].split(',');
            } 
        for (i in inventory) {
            inventory[i].sku = Number(inventory[i].sku);
            inventory[i].quantity = Number(inventory[i].quantity);
            inventory[i].cost = Number(inventory[i].cost); 
        } } else {
        const shirt = [], jeans = [], jacket = [], hat = [], socks = [];
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
        } 
    return inventory;  
}
//view the inventory function
function view(inventory) {
    'use strict';
    for (let i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i].sku + '\t' + 
                           inventory[i].product + '\t' + '(' +
                           inventory[i].quantity + ')' + '\t' + '$' +
                           inventory[i].cost)  
    }
}
//update stock function
function update(inventory) {
    'use strict';
    let i;
    let itemSku = parseInt(window.prompt('Enter the SKU you wish to update.'));
    for (i = 0; i < inventory.length; i += 1) {
    window.console.log(itemSku, typeof itemSku);
        if (inventory[i].sku == itemSku) 
        index = i; {
        var newQ = parseInt(window.prompt('Enter new quantity of stock'));
        if (isNaN(newQ)) {
            window.alert('That isn\'t a number, duh.');
        } else {
            inventory[i].quantity = newQ;
            localStorage.inventoryList = inventory.join('|');  
            window.console.log('The new quantity is ' + inventory[i].quantity);
            view(inventory);
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