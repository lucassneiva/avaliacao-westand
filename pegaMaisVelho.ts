interface Person {
  name: string;
  age: number;
}

function pegaMaisVelho(pessoas: Person[]): string[] {
  if (!pessoas || pessoas.length === 0) {
    throw new Error("Lista não fornecida");
  }

  const maisVelho = pessoas.reduce((maisVelha, pessoaAtual) => {
    return pessoaAtual.age > maisVelha.age ? pessoaAtual : maisVelha;
  });

  return pessoas
    .filter((pessoa) => pessoa.age === maisVelho.age)
    .map((pessoa) => pessoa.name);
}

const pessoas: Person[] = [
  { name: "Davi", age: 20 },
  { name: "Felipe", age: 15 },
  { name: "Cristiano", age: 30 },
  { name: "João", age: 30 },
];
console.log(pegaMaisVelho(pessoas));
