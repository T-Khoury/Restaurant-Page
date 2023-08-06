import createHeader from './header';
import renderHome from './home';
import createFooter from './footer';
import renderMenu from './menu';

function pageLoad() {
    createHeader();
    renderMenu();
    createFooter();
};

export default pageLoad;








