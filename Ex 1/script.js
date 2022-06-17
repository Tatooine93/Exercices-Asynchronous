/* document.getElementById("btn").addEventListener("click", () => {

fetch('becode.json')
.then(response => response.text())
.then(text => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (const item of JSON.parse(text)) {

    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
    }
})
.catch(error => {
    console.log('There are no rules at Becode', error)
})
}); */

document.getElementById("btn").addEventListener("click", () => {

    fetch('becode.json')
    .then(response => response.json())
    .then(data => {
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        for (const item of data) {
    
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
        }
    })
    .catch(error => {
        console.log('There are no rules at Becode', error)
    })
    });