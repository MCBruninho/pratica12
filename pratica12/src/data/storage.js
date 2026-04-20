export function obterAgendamentos() {
  return JSON.parse(localStorage.getItem("agendamentos")) || [];
}

export function salvarAgendamento(agendamento) {
  const lista = obterAgendamentos();
  lista.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(lista));
}