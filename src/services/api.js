import axios from "axios";

export const PACIENT_ENDPOINT = "https://fusion-med.herokuapp.com/api/accounts/pacients/";


export const getPacientData = (PacienteNumber) => {
  axios
    .get(`${PACIENT_ENDPOINT}${PacienteNumber}`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

// export async function getPacientData(PacienteNumber) {
//  const data = await fetch(`http://fusion-med.herokuapp.com/api/accounts/pacients/${PacienteNumber}`, {mode: 'cors'})
//    .then((r) => r.json())
//    .catch((error) => console.log(error));
//  return data;
//}

//export async function getDoctors() {
//  const doctorsData = await fetch(`${URL}/list.php?c=list`).then((r) => r.json());
//  return doctorsData;
//} //
