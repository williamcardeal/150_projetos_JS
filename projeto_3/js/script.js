 const form = document.querySelector("#form");

 form.addEventListener("submit" , function(event){
     event.preventDefault()

     const weight = document.querySelector("#weight").value;
     const height = document.querySelector("#height").value;

const tmi = (weight / (height * height)).toFixed(2);

const value = document.querySelector("#value");
let description = "";

value.classList.add("vermelho")

document.querySelector("#infos").classList.remove("hidden");

 if (tmi < 18.5){
    description = "Cuidado! voçê está abixo do peso!"
    value.classList.remove("vermelho")
    value.classList.add("amarelo")
 }else if (tmi >=18.5 && tmi <= 25){
    description = "ótimo seu peso está ideal!"
    value.classList.remove("vermelho")
    value.classList.add("verde")
 }else if (tmi > 25 && tmi <= 30){
    description = "Cuidado você está com sobrepeso!"
    value.classList.remove("vermelho")
    value.classList.add("amarelo")
 }else if (tmi > 30 && tmi <= 35){
    description = "Cuidado você está com obesidade morderada!"
   
    
 }else if (tmi > 35 && tmi <= 40){
    description = "Cuidado você está com obesidade severa!"
 }else {
    description = "Cuidado você está com obesidade morbita!"
 }

 value.textContent = tmi.replace(".",",")
document.querySelector("#description").textContent = description;
 });