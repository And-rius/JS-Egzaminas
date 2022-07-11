/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let lb = 2.2046;
let g = 0.0010000;
let oz = 35.274;

function weightConvert() {
    let weight = document.getElementById("weight").value ;
    document.getElementById("output_pounds").innerHTML = weight * lb;
    document.getElementById("output_grams").innerHTML = weight * g;
    document.getElementById("output_ounces").innerHTML = weight * oz;
  }
