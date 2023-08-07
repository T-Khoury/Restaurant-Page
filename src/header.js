function createHeader() {
    const docBody = document.body;

    const header = document.createElement('header');
    const restaurantName = document.createElement('h2');
    restaurantName.textContent = ('Taco Delicioso');
    header.appendChild(restaurantName);

    const navbar = document.createElement('nav');
    const homeButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');

    homeButton.setAttribute("class", "home-button");
    menuButton.setAttribute("class", "menu-button");
    contactButton.setAttribute("class", "contact-button");

    homeButton.setAttribute("id", "tab");
    menuButton.setAttribute("id", "tab");
    contactButton.setAttribute("id", "tab");

    homeButton.textContent = ('Home');
    menuButton.textContent = ('Menu');
    contactButton.textContent = ('Contact');


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    header.appendChild(navbar);



    docBody.insertAdjacentElement('afterbegin', header);

};



export default createHeader;