import chickentacospic from './images/chickentacos.jpg';
import steaktacospic from './images/steaktacos.jpg';
import shrimptacospic from './images/shrimptacos.jpg';
import crispybirriatacospic from './images/crispybirriatacos.jpg';
import tacoplatepic from './images/tacoplate.jpg';
import tacosaladpic from './images/tacosalad.jpg';
import salsapic from './images/salsa.jpg';
import guacpic from './images/guacamole.jpg';
import sodapic from './images/soda.jpg';



function renderMenu() {
    const pageContent = document.getElementById('content');
    const menuContent = document.createElement('div');

    menuContent.setAttribute('id', 'menu');

    const tacos = document.createElement('div');
    const meals = document.createElement('div');
    const sides = document.createElement('div');
    const drinks = document.createElement('div');

    tacos.setAttribute('class', 'menu-section');
    meals.setAttribute('class', 'menu-section');
    sides.setAttribute('class', 'menu-section');
    drinks.setAttribute('class', 'menu-section');

    const tacosHeader = document.createElement('p');
    const mealsHeader = document.createElement('p');
    const sidesHeader = document.createElement('p');
    const drinksHeader = document.createElement('p');

    tacosHeader.setAttribute('class', 'menu-subheading');
    mealsHeader.setAttribute('class', 'menu-subheading');
    sidesHeader.setAttribute('class', 'menu-subheading');
    drinksHeader.setAttribute('class', 'menu-subheading');

    tacosHeader.textContent = ('Tacos');
    mealsHeader.textContent = ('Plates');
    sidesHeader.textContent = ('Sides');
    drinksHeader.textContent = ('Drinks');

    const tacosFood = document.createElement('div');
    const mealsFood = document.createElement('div');
    const sidesFood = document.createElement('div');
    const drinksFood = document.createElement('div');

    tacosFood.setAttribute('class', 'food-section');
    mealsFood.setAttribute('class', 'food-section');
    sidesFood.setAttribute('class', 'food-section');
    drinksFood.setAttribute('class', 'food-section');

    tacos.append(tacosHeader, tacosFood);
    meals.append(mealsHeader, mealsFood);
    sides.append(sidesHeader, sidesFood);
    drinks.append(drinksHeader, drinksFood);


    const menuElements = menu.map((element) => createMenuElement(element));


    menuElements.forEach((element) => {
        switch (element.getAttribute('class')) {
            case "Taco":
                tacosFood.appendChild(element);
                break;
            case "Meal":
                mealsFood.appendChild(element);
                break;
            case "Side":
                sidesFood.appendChild(element);
                break;
            case "Drink":
                drinksFood.appendChild(element);
                break;
            default:
                console.log('oops');
        };
    });

    menuContent.append(tacos, meals, sides, drinks);
    pageContent.appendChild(menuContent);

    return menuContent;

};

function createMenuElement(menuItem) {
    const menuItemElement = document.createElement('div');
    menuItemElement.setAttribute('id', 'menu-item');
    menuItemElement.className = menuItem.type;
    
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const picture = document.createElement('img');

    title.textContent = menuItem.name;
    description.textContent = menuItem.description;
    picture.src = menuItem.picture;

    menuItemElement.append(title, picture, description);

    return menuItemElement;


}

let menu = [];

const createMenuItem = (type, name, description, picture) => {
    return { type, name, description, picture };

};

const chickenTacos = createMenuItem("Taco", "Chicken Tacos", "Chicken, Onion, Fresh Cilantro, Lime, and Salsa", chickentacospic);

const steakTacos = createMenuItem("Taco", "Steak Tacos", "Steak, Onion, Fresh Cilantro, Salsa", steaktacospic);

const shrimpTacos = createMenuItem("Taco", "Shrimp Tacos", "Crispy battered Shrimp, Pickled Onion, Fresh Cilantro, Lime", shrimptacospic);

const crispyBirriaTacos = createMenuItem("Taco", "Crispy Birria Tacos", "2 Layer Crispy Tacos with Melted Cheese, Birria, Onions, Fresh Cilantro, and served with Consomé", crispybirriatacospic);

const tacoPlate = createMenuItem("Meal", "Taco Plate", "3 Tacos served with Rice and Beans", tacoplatepic);

const tacoSalad = createMenuItem("Meal", "Taco Salad", "Crispy Tortilla, Choice of Meat, Rice, Beans, Cheese, Lettuce, Salsa, Guacamole", tacosaladpic);

const salsa = createMenuItem("Side", "Salsa", "Spicy Chipotle Salsa, Served with Chips", salsapic);

const guac = createMenuItem("Side", "Guacamole", "Served with Tortilla Chips", guacpic);

const soda = createMenuItem("Drink", "Bottled Soda", "Assorted Flavors", sodapic);

menu.push(chickenTacos, steakTacos, shrimpTacos, crispyBirriaTacos, tacoPlate, tacoSalad, salsa, guac, soda);


export default renderMenu;



