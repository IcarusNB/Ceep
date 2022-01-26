const BotaoConclui = () => {
  //Cria o botão
  const botaoConclui = document.createElement("button");

  //Adiciona a class 'check-button' para pegar os estilos
  botaoConclui.classList.add("check-button");

  //Adiciona o texto ao Botão
  botaoConclui.innerText = "Concluir";

  //Adiciona o Listener ao botão
  botaoConclui.addEventListener("click", concluirTarefa);

  return botaoConclui;
};

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaConcluida = botaoConclui.parentElement;

  tarefaConcluida.classList.toggle("done");
};

export default BotaoConclui;
