function calcular(n1,n2){
       n1 = parseFloat(document.getElementById("n1").value)
       n2 =parseFloat(document.getElementById("n2").value)

   selector = document.getElementById("selector").value 
switch(selector){
    case '+':
        calculo = (n1 + n2)
        document.getElementById("resultado").innerHTML =`o resultado da somo de ${n1} + ${n2} é = ${calculo}` 
    break
    
    case '-':
        calculo = (n1 - n2)
        document.getElementById("resultado").innerHTML =`o resultado da subtração de ${n1} - ${n2} é = ${calculo}` 
    break
    
    case '/':
        calculo = Math.round ((n1 / n2))
    if (Number.isNaN (calculo)) { document.getElementById("resultado").innerHTML = ` vocé e burro 0 mais 0 não divide ne p***`    }
    else { 
   document.getElementById("resultado").innerHTML =`o resultado da divisão de ${n1} / ${n2} é = ${calculo}` 
    }
    break
    

    case '*':
        calculo = (n1 * n2)
        document.getElementById("resultado").innerHTML =`o resultado da multiplicasão de ${n1} * ${n2} é = ${calculo}` 
    break

 
    }
                               



}