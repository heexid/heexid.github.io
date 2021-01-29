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

//change color on section get in touch
var touchColor = "#1C1C1C"
var normalColor= "#FFFFFF"
$(window).on("scroll touchmove", function(){
    if ( $(document).scrollTop() >= $("#touchColor").position().top) {
        $('body').css('background',$("#touchColor").attr("data-color"))
    }else{
        $('body').css('background',$("#normalColor").attr("data-color"))
    }
})

