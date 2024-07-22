const cowsUrl = "http://localhost:3000/cows";
const milkProductionUrl = "http://localhost:3000/milkProduction";
const inputValuesUrl = "http://localhost:3000/inputValues";

document.addEventListener('DOMContentLoaded',() =>{
fetchCows()
fetchMilkProduction()
fetchInputValues()
})

function fetchCows() {
    fetch(cowsUrl)
    .then(res =>res.json())
    .then(cows =>{
        const animals = document.querySelector('.content')
        cows.forEach(cow =>{
            const cowDiv=document.createElement('div')

            const image = document.createElement('img')
            image.src = cow.image

            const name =document.createElement('h2')
            name.textContent = cow.name

            const breed = document.createElement('h3')
            breed.textContent = cow.breed

            const age = document.createElement('h3')
            age.textContent = `Age: ${cow.age}`

            cowDiv.appendChild(image)
            cowDiv.appendChild(name)
            cowDiv.appendChild(breed)
            cowDiv.appendChild(age)


            animals.appendChild(cowDiv)



        });
    })
}


function fetchMilkProduction() {
  fetch(milkProductionUrl)
    .then(res => res.json())
    .then(data => {
      const content = document.querySelector('.content');
      data.forEach(item => {
        const milkDiv = document.createElement('div');
        milkDiv.innerHTML = `<h3>Milk Production</h3>
                             <p>Cow ID: ${item.cowId}</p>
                             <p>Date: ${item.date}</p>
                             <p>Quantity: ${item.quantity} liters</p>`;
        content.appendChild(milkDiv);
      });
    })
    .catch(error => console.error('Error fetching milk production:', error));
}

function fetchInputValues() {
  fetch(inputValuesUrl)
    .then(res => res.json())
    .then(data => {
      const content = document.querySelector('.content');
      data.forEach(item => {
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `<h3>Input Values</h3>
                              <p>Cow ID: ${item.cowId}</p>
                              <p>Input Type: ${item.inputType}</p>
                              <p>Value: $${item.value}</p>`;
        content.appendChild(inputDiv);
      });
    })
    .catch(error => console.error('Error fetching input values:', error));
}