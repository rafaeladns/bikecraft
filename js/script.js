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
