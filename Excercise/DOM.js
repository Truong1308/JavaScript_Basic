//---------Event DOM-------------
/*
var btn = document.getElementById('btn');

btn.onclick = function(){
    alert('thanh cong');
    confirm('ok chưa');
    prompt('ý kiến không ');
};

setTimeout(function (){
    btn.onclick = function(){
        prompt('ý kiến không ');
    };
    
},5000)
*/

//-------------Event Listener-------------------
/*
var btn = document.getElementById('btn'); 

 function viec1 (){
    alert('viec1')
 };
function viec2 (){
    alert('viec 2 ne')
}

btn.addEventListener('click', viec1)


setTimeout(function(){
btn.removeEventListener('click', viec1 )   
},3000) ; reload sau 3s code sẽ off

setTimeout(function(){
    btn.addEventListener('click', viec2)
},4000) // reload sau 4s code sẽ run
*/

//------------- DOM Methors
/*
function displayDate() {
  document.getElementById("demo").innerHTML = "Hiện rồi nè";
}
function displayDate1() {
  document.getElementById("demo").innerHTML = "Được rồi nè";
}
document.getElementById("btn").addEventListener("click", displayDate);

setTimeout(function(){
    document.getElementById("btn").removeEventListener('click', displayDate)
},3000)

setTimeout(function(){
    document.getElementById("btn").addEventListener('click', displayDate1)
},4000)
*/

