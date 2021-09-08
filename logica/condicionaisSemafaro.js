// aula 5
let sinal = 'vermelho';

switch(sinal) {
  case 'verde' :
    console.log('pode passar');
    break;
  case 'amarelo' :
    console.log('prestes a fechar, cuidado...');
    break;
  case 'vermelho' :
    console.log('fechando, não passe');
    break;
  default :
    console.log('sinal invalido');
}