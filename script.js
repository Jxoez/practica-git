let contador = 0;
const valor = document.getElementById("valor");

document.getElementById("sumar").addEventListener("click", () => {
  contador++;
  valor.textContent = contador;
});

document.getElementById("restar").addEventListener("click", () => {
  contador--;
  valor.textContent = contador;
});
