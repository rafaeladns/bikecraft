let botao = document.querySelector("form button");
botao.addEventListener("click", validaFormulario)

let form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
  e.preventDefault();
}); 

const inputs = document.querySelectorAll("form input");
function validaFormulario() {
  let campoVazio = inputs.find(element => element.value.length < 1);
  if(campoVazio == undefined){
    botao.textContent = 'Dados incorretos!'
  }else{
    botao.textContent = 'Dados Enviados!'
  }
}  

