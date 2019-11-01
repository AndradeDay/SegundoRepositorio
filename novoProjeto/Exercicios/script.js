let resultado = prompt('Digite o resultado do jogo');

//var resultado = 'vitória';

switch (resultado){
  case 'v':
    console.log('Parabéns, você fez 3 pontos');
    break;
 case 'e':
    console.log('foi empate, 1 ponto');
    break;   
 case 'd':
    console.log('Derrota!!!!! nenhum ponto');
    break;
 default:
    console.log('Resultado invalido' + resultado);
}