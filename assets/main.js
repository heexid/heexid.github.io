//identity
const arrayOfHello = ['Halo','Hello','Hola','Bonjour','Ciao','Hej'];
const arrayOfHelloLang = ['Indonesia','English','Spanish','France','Italy','Sweeden'];


//method
function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeHeloModal(i){
    document.getElementById("hello").innerHTML = `Say ${arrayOfHello[i]}!`;
    document.getElementById("lang").innerHTML = `${arrayOfHelloLang[i]} language for “hello”`;
}


//main
const i = randomInt(arrayOfHello.length,0);
changeHeloModal(i);