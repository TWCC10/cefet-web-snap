let ocultarMarcacao = document.querySelector('#visibilidade-das-marcacoes');
let bodyPrincipal = document.querySelector('body');




ocultarMarcacao.addEventListener('change',ocultarOunao)
function ocultarOunao(){

    if(this.checked)
    bodyPrincipal.classList.add(ocultarMarcacao.value);
else
    bodyPrincipal.classList.remove(ocultarMarcacao.value);
}