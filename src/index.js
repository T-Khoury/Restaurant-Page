import pageLoad from './page-load';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import './style.css';


console.log('hello world and me');



function website() {
    const tabs = document.querySelectorAll('#tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            tabSwitch(e);
        });
    });
 };
 
 
 function tabSwitch(e) {
    const content = document.getElementById('content');
    content.replaceChildren();
    console.log(e.target.className);

    switch (e.target.className) {
        case "home-button":
            renderHome();
            break;
        case "menu-button":
            renderMenu();
            break;
        case "contact-button":
            renderContact();
            break;
    };
 };

 
 


pageLoad();

website();

