const meuNome = "João Vitor";
const soma = [10, 20, 30, 40].reduce((acc, num) => acc + num, 0);
// .reduce = forEach só que mais expecifico para somas.

console.log(`Meu nome é ${meuNome} e sou nota: ${soma}`);
