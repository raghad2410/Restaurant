'use strict';
let foodIDCounter = 1001;

// Constructor
function Food(foodName, type, price) {
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    this.foodID = this.generateFoodID();
}

Food.prototype.generateFoodID = function () {
    const generatedID = foodIDCounter;
    foodIDCounter++;
    return generatedID
};

// Render
Food.prototype.render = function () {
    let table = document.getElementById('food-table');

    let row = document.createElement('tr');

    let foodID = document.createElement('td');
    foodID.textContent = this.foodID;
    row.appendChild(foodID);

    let foodName = document.createElement('td');
    foodName.textContent = this.foodName;
    row.appendChild(foodName);

    let foodType = document.createElement('td');
    foodType.textContent = this.type;
    row.appendChild(foodType);

    let foodPrice = document.createElement('td');
    foodPrice.textContent = this.price;
    row.appendChild(foodPrice);

    table.appendChild(row);
};

function handler(e) {
    e.preventDefault();

    let foodName = e.target.foodName.value;
    let foodType = e.target.choice.value;
    let foodPrice = e.target.price.value;

    let food = new Food(foodName, foodType, foodPrice);

    food.render();

    e.target.reset();
}

let saveValues = document.getElementById('food-form');
saveValues.addEventListener('submit', handler);








