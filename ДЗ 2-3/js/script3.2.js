var names = prompt('Как тебя зовут?','');
var years = prompt(names + ', какого ты года рождения?','');
var age = 2019 - years;
function sklon(years) {
    var y;
    var count = age % 100;
    if (count >= 5 && count <= 20) {
        y = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            y = 'год';
        } else {
            if (count >= 2 && count <= 4) {
                y = 'года';
            } else {
                y = 'лет';
            }   
        }
    }
    return y;
}
alert(age + ' ' + sklon(years));