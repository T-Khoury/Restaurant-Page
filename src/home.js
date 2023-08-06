function renderHome() {
    const pageContent = document.getElementById('content');

    const homeContent = document.createElement('div');
    const headline = document.createElement('h1');
    const description = document.createElement('p');

    homeContent.setAttribute("id", "active-tab")

    headline.textContent = ('Delicious and Authentic Tacos!');
    description.textContent = ('Treat yourself today!');

    homeContent.appendChild(headline);
    homeContent.appendChild(description);

    pageContent.appendChild(homeContent);

}

export default renderHome;