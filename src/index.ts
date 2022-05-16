function calcularÁreaTriángulo(base: number, altura: number): number {
  let resultado: number = (base * altura) / 2;
  return resultado;
}

let i: number;

for (i = 1; i <= 100; i++) {
  console.log("El área del triángulo es: " + calcularÁreaTriángulo(i, i * 2));
}
