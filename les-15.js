function pow(x, n) 
{
    var result = 1;
    for(var i = 0; i < n; i++) {
        result = result * x ;
    }
    return result;
}
var x = +prompt('Enter x number ', ' ');
var n = +prompt('Enter n pow, ', ' ');
if (n < 0)
{
    alert('Степень' + n + 'не поддерживается, введите целую степень, большую 0');
} else {
    alert( pow(x, n) );
}