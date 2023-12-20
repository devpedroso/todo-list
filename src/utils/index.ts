export function newDateFormat(): string {
  let data = new Date();
  let ano = data.getFullYear();
  let mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa do zero, por isso o +1
  let dia = String(data.getDate()).padStart(2, "0");
  let horas = String(data.getHours()).padStart(2, "0");
  let minutos = String(data.getMinutes()).padStart(2, "0");

  let dataFormatada: string = `${ano}-${mes}-${dia}T${horas}:${minutos}`;
  console.log(dataFormatada);

  return dataFormatada;
}
