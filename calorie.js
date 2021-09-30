const popup = document.getElementById('mypopup');
const popupToggle = document.getElementById('myBtn');
const popupClose = document.querySelector('.close');

const sex = document.querySelector('.sex')
const female = document.querySelector('#female');
const male = document.querySelector('#male');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const age = document.querySelector('.age');
const persons = document.querySelectorAll('.person');
const calculationBig = document.querySelector('.calculating-big');
let action = document.querySelectorAll('.action');
const result = document.querySelector('.result');
const count = document.querySelector('.count');

const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const table = document.getElementById('myTable');
const resulte = document.getElementById('myResult');


let resultCalory = document.getElementById('resultCalory');
let resultProtein = document.getElementById('resultProtein');
let  resultFat = document.getElementById('resultFat');
let resultCarbo = document.getElementById('resultCarbo');




popupToggle.onclick = () =>{
    popup.style.display = 'block';
}

popupClose.onclick = () => {
    popup.style.display = 'none';
}


window.onclick = (e) => {
    if(e.target === popup){
        popup.style.display = 'none';
    }
}

const parameters = {
    personHeight: '',
    personWeight: '',
    personAge: '',
    action: null,
    sex: ''
}

count.addEventListener('click', start);

action.forEach((act) => {
    act.addEventListener('click', (event) => {
        parameters.action = +act.value;
    })
})

persons.forEach((person) => {
    person.addEventListener('click', () => {
        parameters.sex = person.value;
    })
})

function start() {
    parameters.personHeight = +height.value;
    parameters.personWeight = +weight.value;
    parameters.personAge = +age.value;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !calculationBig) {
            result.textContent = 'null';
        }
    }
    calcTotal()

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * parameters.personWeight) + (3.1 * parameters.personHeight) - (4.3 * parameters.personAge)) * parameters.action);
    } else{
        result.textContent = Math.round((88.36 + (13.4 * parameters.personWeight) + (4.8 * parameters.personHeight) - (5.7 * parameters.personAge)) * parameters.action);
    };
}


start()



let newTableRoad = {
    name: '',
    quantity: '',
    calory:'',
    protein:'',
    fat:'',
    carbohydrates:''
}


const products = [];


const cleanAllFields = () => {
    document.getElementById('name-product').value = '';
    document.getElementById('quantity-product').value = '';
    document.getElementById('calory-product').value = '';
    document.getElementById('protein-product').value = '';
    document.getElementById('fat-product').value = '';
    document.getElementById('carbohydrates-product').value = '';

    newTableRoad = {
        name: '',
        quantity: '',
        calory: '',
        protein: '',
        fat: '',
        carbohydrates: ''
    }
}


const removeUser = (e, userId) => {
    console.log('click: ', userId)
    console.log(e.target);
    const row = e.target.closest("tr");
    row.parentElement.removeChild(row);
    //
    products.forEach((item, index) => {
        if (item.name === userId) {
            products.splice(index, 1)
        }
    })
    console.log(products)
}

const createTable = (product) => {

    console.log(product);
    let tr = document.createElement('tr');

    const imgPen = document.createElement('img');
    imgPen.src = 'editSvg.svg';

    const imgBin = document.createElement('img');
    imgBin.src = 'binSvg.svg';



    imgPen.width = 30;
    imgBin.width = 30;

    imgBin.addEventListener('click', (e) => removeUser(e, products.id));


    let productCell = document.createElement('td');
    let quantityCell = document.createElement('td');
    let caloryCell = document.createElement('td');
    let proteinCell = document.createElement('td');
    let fatCell = document.createElement('td');
    let carbohydratesCell = document.createElement('td');
    let actionCell = document.createElement('td')


    productCell.appendChild(document.createTextNode(product.name));
    quantityCell.appendChild(document.createTextNode(product.quantity));
    caloryCell.appendChild(document.createTextNode(product.calory));
    proteinCell.appendChild(document.createTextNode(product.protein));
    fatCell.appendChild(document.createTextNode(product.fat));
    carbohydratesCell.appendChild(document.createTextNode(product.carbohydrates));
    actionCell.appendChild(imgPen);
    actionCell.appendChild(imgBin);


    tr.appendChild(productCell);
    tr.appendChild(quantityCell);
    tr.appendChild(caloryCell);
    tr.appendChild(proteinCell);
    tr.appendChild(fatCell);
    tr.appendChild(carbohydratesCell);
    tr.appendChild(actionCell);


    table.appendChild(tr)
};

const countProductValues = (productArr) => {
    const countedValues = {
        calory: null,
        protein: null,
        fat: null,
        carbohydrates: null
    }

    productArr.forEach((product) => {
        countedValues.calory += +product.calory;
        countedValues.protein += +product.protein;
        countedValues.fat += +product.fat;
        countedValues.carbohydrates += +product.carbohydrates;
    })

    return countedValues;



}


add.addEventListener('click',() =>{
    const nameProduct = document.getElementById('name-product').value;
    const quantityProduct = document.getElementById('quantity-product').value;
    const caloryProduct = document.getElementById('calory-product').value;
    const proteinProduct = document.getElementById('protein-product').value;
    const fatProduct = document.getElementById('fat-product').value;
    const carbohydratesProduct = document.getElementById('carbohydrates-product').value;


    newTableRoad = {
        name: nameProduct,
        quantity: quantityProduct,
        calory: caloryProduct,
        protein: proteinProduct,
        fat: fatProduct,
        carbohydrates: carbohydratesProduct
    }

    createTable(newTableRoad);
    products.push(newTableRoad);

    cleanAllFields()



    let tds = document.querySelectorAll('td');
    for(let i = 0; i < tds.length; i++){
        tds[i].addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);

            let td = this;
            input.addEventListener('blur', function () {
                td.innerHTML = this.value;
                td.addEventListener('click', func)
            });
            this.removeEventListener('click', func);
        });
    }




    const result = countProductValues(products);

    console.log('result: ', result)
    const resultValues = Object.values(result);

    console.log(result.protein)

    console.log(resultValues);

resultCalory.innerText = result.calory
resultProtein.innerText = result.protein
resultFat.innerText = result.fat
resultCarbo.innerText = result.carbohydrates




});

clean.addEventListener('click', () => cleanAllFields())



