function pegaMaior(lista: number[]): number {
  if (!lista || lista.length === 0) {
    throw new Error("Lista não fornecida");
  } else {
    return Math.max(...lista);
  }
}

const numeros = [3, 5, 7, 2, 8, 6];
console.log(pegaMaior(numeros));
