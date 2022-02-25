
let botao = document.querySelector("form button");
botao.addEventListener("click", validaFormulario)

let form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
  e.preventDefault();
}); 

const inputs = document.querySelectorAll("form input");
let inputList = [];
[].forEach.call(inputs, function(item) { 
  inputList.push(item)
 });

function validaFormulario() {
  let campoVazio = inputList.find(element => element.value.length < 1);
  if(campoVazio != undefined){
    botao.textContent = 'Dados incorretos!'
  }else{
    botao.textContent = 'Dados Enviados!'
  }
}  

