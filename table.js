const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const myTable = document.getElementById('my-table');

const numberTable = document.querySelector('.number-table');
const nameProductTable = document.querySelector('.name-product-table');
const gramTable = document.querySelector('.gram-table');
const caloryTable = document.querySelector('.calory-table');
const proteinTable = document.querySelector('.protein-table');
const fatTable = document.querySelector('.fat-table');
const carbohydrateTable = document.querySelector('.carbohydrate-table');

const thTable = {
    number: '',
    name: '',
    gram:'',
    protein:'',
    fat:'',
    carbohydrate: ''
}

const products = [];

add.addEventListener('click', (event) =>{
    thTable.name = nameProductTable.value;
    thTable.gram = gramTable.value;
    thTable.protein = proteinTable.value;
    thTable.fat = fatTable.value;
    thTable.carbohydrare = carbohydrateTable.value;
});
add.addEventListener('click', (event) =>{
    console.log( thTable.name);
});