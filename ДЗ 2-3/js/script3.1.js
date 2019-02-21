var years = prompt('Сколько лет?','');
var smoke = prompt('Куришь?','');
if(years < 18) {
    if(smoke == 'нет') {
        alert('Так держать!');
    } else {
        alert('Маме расскажу');
    }
} else {
    if(smoke == 'нет') {
        alert('Молодец, и не надо');
    } else {
        alert('Ну и зря');
    }
}