function obterAgendamentos() {
  return JSON.parse(localStorage.getItem("agendamentos")) || [];
}

function salvarAgendamentos(lista) {
  localStorage.setItem("agendamentos", JSON.stringify(lista));
}

function formatarData(data) {
  const d = new Date(data);
  return d.toLocaleDateString("pt-BR");
}

function ordenarPorData(lista) {
  return lista.sort((a, b) => {
    const dataA = new Date(`${a.data} ${a.horario}`);
    const dataB = new Date(`${b.data} ${b.horario}`);
    return dataA - dataB;
  });
}

function excluirAgendamento(index) {
  const lista = obterAgendamentos();
  lista.splice(index, 1);
  salvarAgendamentos(lista);
  carregarTabela();
}

function carregarTabela() {
  const tabela = document.querySelector("#tabela-agendamentos tbody");
  const mensagem = document.getElementById("mensagem-vazia");

  let agendamentos = obterAgendamentos();
  agendamentos = ordenarPorData(agendamentos);

  tabela.innerHTML = "";

  if (agendamentos.length === 0) {
    mensagem.style.display = "block";
    return;
  }

  mensagem.style.display = "none";

  agendamentos.forEach((ag, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${ag.nome}</td>
      <td>${formatarData(ag.data)}</td>
      <td>${ag.horario}</td>
      <td>
        <button onclick="excluirAgendamento(${index})" class="btn-excluir">
          Excluir
        </button>
      </td>
    `;

    tabela.appendChild(linha);
  });
}

carregarTabela();