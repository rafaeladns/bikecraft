//Verificar quais links do menu estão ativos//
const links = document.querySelectorAll('.header-menu a');

//função para deixar os links ativos com a linha//
function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}
links.forEach(ativarLink);

//Ativar itens do orçamento e bikcraft e deixar checado quando selecionar algum seguro ou bicicleta para fazer orçamento//
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
  
  console.log(elemento);
}
parametros.forEach(ativarProduto);

