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
}
parametros.forEach(ativarProduto);

//Expandir área das perguntas frequentes//
const perguntas = document.querySelectorAll('.perguntas button');
function ativarPergunta(event){
  const pergunta = event.currentTarget;

  const controls = pergunta.getAttribute('aria-controls');

  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa'); //verificar se tem ativa//
  pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas)

