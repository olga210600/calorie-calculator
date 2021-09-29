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

calcTotal()
start()


