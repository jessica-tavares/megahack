export async function getPacientData(PacienteNumber) {
  const data = await fetch(`/${PacienteNumber}`).then((r) => r.json());
  return data;
}

export async function getDoctors() {
  const doctorsData = await fetch(`${URL}/list.php?c=list`).then((r) => r.json());
  return doctorsData;
}