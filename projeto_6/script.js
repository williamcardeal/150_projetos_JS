function calcularIMC() {
  const peso = document.querySelector("#weight");
  const altura = document.querySelector("#height");
  let resultadoDaPessoa = document.querySelector("#result");

  let alturaDaPesoa = altura.value;
  let pesoDaPesoa = peso.value;

  //   alert(pesoDaPesoa);
  //   alert(alturaDaPesoa);

  let Soma1 = pesoDaPesoa / (alturaDaPesoa * alturaDaPesoa);
  //alert(Soma1.toFixed(2));
//   alert(resultadoDaSoma);
//   let res = Soma1 / pesoDaPesoa;

// let valor = document.querySelector("#result")
//  valor = Soma1

 document.querySelector("#result").innerHTML = `seu resultado seu gordo e ${Soma1.toFixed(2)}`;

 // innerHTml 
    }


    