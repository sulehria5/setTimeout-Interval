/*-----------timeout function*/
 var h = document.querySelectorAll('h1')
/*setTimeout(function(){ 
    
    console.log("Du hast 3 sekunden verschwenden"); }, 3000);*/


    var myVar = setInterval(myTimer, 1000 );
    

function myTimer() {
  var d = new Date();
  
 h[0].innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
 h[1].innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()+1}`
 h[2].innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()+2}`
}


/*-------------setInterval
clearInterval
if, else------*/



