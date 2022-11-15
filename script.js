//zadanie 1

function buttonClick(){
    let input = document.getElementById('input');
    alert(input.value);

}

//zadanie 2

let months = [
    'Январь', 'Февраль', 'март', 'апрель', 'май', 'июнь',
	'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
]
let date = new Date();
let month = date.getMonth();
alert(months[month]);


