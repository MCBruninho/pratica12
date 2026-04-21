const agendamento = {
  nome: "Nome do paciente",
  data: "2026-04-22",
  horario: "14:00"
};

const lista = JSON.parse(localStorage.getItem("agendamentos")) || [];
lista.push(agendamento);

localStorage.setItem("agendamentos", JSON.stringify(lista));