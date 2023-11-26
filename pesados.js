/*
let vuci07 = document.getElementById(`vuci07`)

function visual() {
    let visivel = false
    if (visivel == false){
        vuci07.style.display = 'block'
        visivel = true
    } else {
        vuci07.style.display = `none`
        visivel = false
    }
}

function esconder() {
    let esconde = false
    if (esconde == false){
        vuci07.style.display = `none`
        esconde = true
    } else {
        vuci07.style.display = `block`
        esconde = false
    }
}
*/

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// adicione um zero na frente de números<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}

function dia(){
    date = new Date()
    year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()
    document.getElementById("res").innerHTML = day + "/" + month + "/" + year
}