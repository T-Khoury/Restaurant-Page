import createHeader from './header';
import renderHome from './home';
import createFooter from './footer';
import renderMenu from './menu';
import renderContact from './contact';

function pageLoad() {
    createHeader();
    renderContact();
    createFooter();
};

export default pageLoad;








