window.onload = function() {

    const eternalsList = document.querySelector('.eternalsList');
    let ul = document.createElement('ul');

    eternals.forEach(eternal => {
        let li = document.createElement('li');
        li.textContent = eternal.name;
        ul.appendChild(li);
    });

    eternalsList.appendChild(ul);

    
    showAllAttributes();
};

function showAllAttributes() {
    let allAttributes = new Set();
    eternals.forEach(eternal => {
        eternal.attributes.forEach(att => allAttributes.add(att));
    });

    let attributeSection = document.querySelector('.attributeList');
    attributeSection.innerHTML = '';

    let ul = document.createElement('ul');
    allAttributes.forEach(att => {
        let li = document.createElement('li');
        li.textContent = att;
        ul.appendChild(li);
    });

    attributeSection.appendChild(ul);
}

function showInfo() {
    const attribute = document.getElementById('attr').value.trim();
    let foundEternals = [];

    eternals.forEach(eternal => {
        let found = eternal.attributes.find(att => att === attribute);
        if (found) {
            foundEternals.push(eternal);
        }
    });

    displayInfo(foundEternals, attribute);
}

function displayInfo(foundEternals, attribute) {
    let display = document.querySelector('.foundEternalsInfo');
    display.innerHTML = "";  

    if (foundEternals.length === 0) {
        display.textContent = `No Eternals found with the attribute "${attribute}".`;
        return;
    }

    let ul = document.createElement('ul');
    foundEternals.forEach(eternal => {
        let li = document.createElement('li');

        let name = document.createElement('h3');
        name.textContent = eternal.name;

        let desc = document.createElement('p');
        desc.textContent = eternal.desc;

        let img = document.createElement('img');
        img.src = eternal.img;
        img.style.width = '150px';

        li.appendChild(name);
        li.appendChild(desc);
        li.appendChild(img);
        ul.appendChild(li);
    });

    display.appendChild(ul);
}
