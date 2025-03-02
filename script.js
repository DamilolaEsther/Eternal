const foundEternals = [];

function showInfo(attribute) {
    alert("A quick tip: Make Sure to Capitalize the first letter in the attribute you're looking for");
    foundEternals.length = 0;

    eternals.forEach(eternal => {
        if (eternal.attributes.includes(attribute)) {
            foundEternals.push(eternal);
        }
    });

    displayInfo(attribute);
}

function displayInfo(attribute) {
    alert("Below is the list of eternals with the attribute: " + attribute);

    let display = document.querySelector(".foundEternalsInfo");
    display.innerHTML = "";  // Clear old results

    let ul = document.createElement("ul");

    foundEternals.forEach(eternal => {
        let li = document.createElement("li");

        let name = document.createElement("h3");
        name.textContent = eternal.name;

        let desc = document.createElement("p");
        desc.textContent = eternal.desc;

        let img = document.createElement("img");
        img.src = eternal.img;
        img.style.width = "150px";

        li.appendChild(name);
        li.appendChild(desc);
        li.appendChild(img);
        ul.appendChild(li);
    });

    display.appendChild(ul);
}

// On page load - show the full list of eternals
window.onload = function() {
    let display = document.querySelector(".eternalsList");
    let ul = document.createElement("ul");

    eternals.forEach(eternal => {
        let li = document.createElement("li");
        li.textContent = eternal.name;
        ul.appendChild(li);
    });

    display.appendChild(ul);
}
