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
        //
        // if (!act.classList.contains('clicked')) {
        //     act.classList.add('clicked')
        //
        // } else {
        //     act.classList.remove("clicked");
        // }
    })
})

persons.forEach((person) => {
    person.addEventListener('click', () => {
        parameters.sex = person.value;
        //
        // console.log('person.className: ', person.className)
        //
        // if (!person.classList.contains('clicked')) {
        //     person.classList.add('clicked')
        //
        // } else {
        //     person.classList.remove("clicked");
        // }
        //
        // console.log('person: ', person)
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
    }


}

calcTotal()
start()








