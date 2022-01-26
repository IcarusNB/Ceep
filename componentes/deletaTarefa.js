const BotaoDeleta = () => {
  //Cria o Botão
  const botaoDeleta = document.createElement("button");

  //Adiciona a class 'check-button' para pegar os estilos
  botaoDeleta.classList.add("delete-button");

  //Adiciona o texto ao botão
  botaoDeleta.innerText = "Deletar";

  //Adiciona o Listener ao botão
  botaoDeleta.addEventListener("click", deletarTarefa);

  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;

  const tarefaDeleta = botaoDeleta.parentElement;

  tarefaDeleta.remove();
};

export default BotaoDeleta;
