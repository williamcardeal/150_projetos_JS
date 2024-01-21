// function teste(){
//     alert(100)
// }teste()

function meuEscopo(){
const form = document.querySelector(".login-form");

// form.onsubmit = function (evento){
    
//     evento.preventDefault()
  
// alert(100)
alert("tudo ok com o codigo")
// };

function recebeEvento (evento){
    evento.preventDefault()
}

form.addEventListener("submit" , recebeEvento() )

}   
meuEscopo()