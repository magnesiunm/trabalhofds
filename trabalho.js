let botao = document.querySelector("#botao");

botao.style.background="lightpink";

botao.addEventListener("click", trocamensagem);

function trocamensagem() {
    botao.innerHTML="Boas vindas!"
}
