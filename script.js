/* const firstname = document.getElementById('firstname');
const adress = `https://api.agify.io?name=${firstname.value}`;
console.log(firstname.value);

const ul = document.createElement('ul');
document.body.appendChild(ul);

document.getElementById("submit").addEventListener("click", () => {

    fetch(adress)
    .then(response => response.json())
    .then(data => {

        for (const item of data) {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        }
    })
    .catch(error => {
        console.log('There are no rules at Becode', error)
    })
}); */

const body = document.querySelector("body");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const firstname = document.getElementById("firstname").value;
    const country = document.getElementById("country").value;
    console.log(firstname, country);

    if (country === "All") {
        fetch(`https://api.agify.io?name=${firstname}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement("div");
            div.innerHTML =  `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}`;
            body.appendChild(div);
            
        });
    }

    else {
        fetch(`https://api.agify.io?name=${firstname}&country_id=${country}`)
        .then(response => response.json())
        .then(data => {
        const div = document.createElement("div");
        div.innerHTML =  `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}, country: ${data.country_id}`;
        body.appendChild(div);
        
    });
    }

});