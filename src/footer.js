function createFooter() {
    const docBody = document.body;

    const footer = document.createElement('footer');
    const anchor = document.createElement('a');

    anchor.setAttribute("href", "https://github.com/T-Khoury/Restaurant-Page");
    

    const logo = document.createElement('img');
    logo.setAttribute("src", "../src/images/icons/github-mark-white.svg");
    logo.setAttribute("class", "footer-logo");

    anchor.textContent = ('Created by T-Khoury as part of The Odin Project');
    anchor.appendChild(logo);

    

    footer.appendChild(anchor);
    docBody.insertAdjacentElement('beforeend', footer);


}

export default createFooter;