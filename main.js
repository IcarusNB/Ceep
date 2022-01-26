import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
  //Previne o comportamento padrão de Recarregar a página
  evento.preventDefault();

  //Pega a lista de Tarefas
  const lista = document.querySelector("[data-list]");

  //Pega o Input no DOM
  const input = document.querySelector("[data-form-input]");
  //Pega o VALOR do Input
  const valor = input.value;

  if (valor) {
    //Cria uma Tarefa
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    //Template para a tarefa
    const conteudo = `<p class="content">${valor}</p>`;

    //Coloca o conteúdo dentro da Tarefa
    tarefa.innerHTML = conteudo;

    //Coloca o Botão de Concluir na Tarefa
    tarefa.appendChild(BotaoConclui());

    //Coloca o Botão de Deletar a Tarefa
    tarefa.appendChild(BotaoDeleta());

    //Anexa a terefa dentro da lista
    lista.appendChild(tarefa);

    //Limpa o Input do forumlário
    input.value = "";
  }
};

//Seleciona o Botão do Formulário
const novaTarefa = document.querySelector("[data-form-button]");
//Adiciona um Listener de CLique ao Botão => Toda vez que ele for clicado, a função será chamada
novaTarefa.addEventListener("click", criarTarefa);
