import abrirContato from "./modules.js";

const elementos_perguntas = document.getElementsByClassName("perguntas");
const botao_retornar = document.getElementById("bt_retornar");
const botao_contato = document.getElementById("bt_contato");
const botao_info = document.getElementById("bt_info");
const botao_doar = document.getElementById("bt_doar");

const respostas = [
  "Resposta 1",
  "Resposta 2",
  "Penultima Resposta",
  "Mais uma Resposta",
  "Resposta adicional 1",
  "Resposta adicional 2",
  "Resposta A",
  "Reposta B",
  "Resposta C",
  "Última",
];

for (let i = 0; i < elementos_perguntas.length; i++) {
  const pergunta = elementos_perguntas[i];

  pergunta.addEventListener("click", () => {
    const resposta = document.createElement("p");
    resposta.innerHTML = respostas[i];
    resposta.className = "respostas";

    if (pergunta.lastElementChild.className == "respostas") {
      pergunta.removeChild(pergunta.lastElementChild);
    } else {
      pergunta.appendChild(resposta);
    }
  });
}

botao_retornar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

botao_contato.addEventListener("click", abrirContato);
botao_info.addEventListener("click", () => {
  window.location.href = "info.html";
});
botao_doar.addEventListener("click", () => {
  window.location.href = "doar.html";
});
