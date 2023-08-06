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


    const menuElements = menu.map((element) => createMenuElement(element));


    menuElements.forEach((element) => {
        switch (element.getAttribute('class')) {
            case "Taco":
                tacos.appendChild(element);
                break;
            case "Meal":
                meals.appendChild(element);
                break;
            case "Side":
                sides.appendChild(element);
                break;
            case "Drink":
                drinks.appendChild(element);
                break;
            default:
                console.log('oops');
        };
    });

    menuContent.append(tacos, meals, sides, drinks);
    pageContent.appendChild(menuContent);

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

    menuItemElement.append(title, description, picture);

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



