'use strict';

const categoryListFormEl = document.querySelector('#categoryListForm');

document.addEventListener('DOMContentLoaded' , function(){
    console.log('loaded')

    const chuckQuote = document.querySelector('#chuckQuote');

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    get(apiUrl).then(function (response){
        console.log('RESPONSE' , response)
        showQuote(response.value , chuckQuote);
    })

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function(response){
        generateCategoryList(response)
        console.log(response)
    })
});
function showQuote(quote, element) {
    element.innerText = quote;
};

function generateCategoryList(categoryMilk) {
    console.log(categoryMilk);
    const selectEl = document.createElement('select');
    categoryMilk.map(function(category){
        // create an option element
    const option = document.createElement('option');
     // define option attributes
    option.value = category;
    option.text = category;
    // append the option to the <select>
    selectEl.appendChild(option);
    });
    // append the <select> to the <form>
    categoryListFormEl.append(selectEl);
}

categoryListFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const category5 = this.querySelector('select').value;
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category5}`;
    get(apiUrl).then(function (response){
        console.log('RESPONSE' , response)
        showQuote(response.value , chuckQuote);
})});

function generateQuote(apiUrl) {
    get(apiUrl).then(function(response){
        showQuote(response.value, chuckQuote);
    })
}