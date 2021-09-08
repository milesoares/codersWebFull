// aula 10

const vetor = ["10", "20", "30"];
const stringerToInt = (X) => parseInt(X);
const vetor2 = vetor.map(stringerToInt);
console.log(vetor2);

const vetor3 = vetor2.map(X => X*X);
console.log(vetor3);
