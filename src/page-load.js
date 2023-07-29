


function createHeader() {
    const pageContent = document.getElementById('content');

    const header = document.createElement('header')
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = ('Taco Delicioso');

    header.appendChild(restaurantName)

    pageContent.appendChild(header);


};

export default createHeader;


