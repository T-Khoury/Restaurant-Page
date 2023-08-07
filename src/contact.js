function renderContact() {
    const pageContent = document.getElementById('content');
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = ('Contact Us');

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.setAttribute('class', 'contact-info');

    const address = document.createElement('div');
    address.setAttribute('class', 'address');
    const hours = document.createElement('div');
    hours.setAttribute('class', 'hours');
    const phone = document.createElement('div');
    phone.setAttribute('class', 'phone');
    const mail = document.createElement('div');
    mail.setAttribute('class', 'mail');
    

    const addressIcon = document.createElement('img');
    addressIcon.setAttribute('src', '../src/images/icons/map-pin.svg');
    const hoursIcon = document.createElement('img');
    hoursIcon.setAttribute('src', '../src/images/icons/clock.svg');
    const phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', '../src/images/icons/phone.svg');
    const mailIcon = document.createElement('img');
    mailIcon.setAttribute('src', '../src/images/icons/mail.svg');

    const addressText = document.createElement('p');
    addressText.textContent = ('1071 Santa Rosa Plaza, Santa Rosa, CA 95401');
    const hoursText = document.createElement('p');
    hoursText.textContent = ('M-Th: 11am-10pm F-Sa: 11am-11pm Su: 12pm-9pm');
    const phoneText = document.createElement('p');
    phoneText.textContent = ('707-000-7777');
    const mailText = document.createElement('p');
    mailText.textContent = ('Message Us');

    const mapContainer = document.createElement('div');

    const map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.096870292537!2d-122.71938722397569!3d38.43923137182571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808447ffdc4220bd%3A0x499818ef26fda11!2s1071%20Santa%20Rosa%20Plaza%2C%20Santa%20Rosa%2C%20CA%2095401!5e0!3m2!1sen!2sus!4v1691425917569!5m2!1sen!2sus');
    map.setAttribute('width', '600');
    map.setAttribute('height', '450');
    map.setAttribute('style', 'border:0;');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    address.append(addressIcon, addressText);
    hours.append(hoursIcon, hoursText);
    phone.append(phoneIcon, phoneText);
    mail.append(mailIcon, mailText);

    mapContainer.appendChild(map);

    contactInfoContainer.append(address, hours, phone, mail, mapContainer);
    contactContent.append(contactHeading, contactInfoContainer);
    pageContent.appendChild(contactContent);


}

export default renderContact;