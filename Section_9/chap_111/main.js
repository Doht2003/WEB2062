const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close:22,
        },
        fri: {
            open: 11,
            close:23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00',address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} anh ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// entries() in ra index + item vào 1 mảng [index, item]
// for (const item of menu.entries()) console.log(item); 

for (const [i,el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`); 
};

// console.log(...menu.entries());