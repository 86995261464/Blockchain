//1ºutilizando o pacote instalado crypto-js
//require -> carregar pacote
// aprendemos como gerar um hash de uma palavra
//tostring torna a chave em texto
//lembrando que ao criar um hash nao é possivel mais acessar o texto anterior.
//hash é uma tecnica muito util para assinatura digital em cada bloco.
//const sha256 = require('crypto-js/sha256')
//const hash = sha256('texto');
//console.log(hash)
//const sha256 = require('crypto-js/sha256');//poderia ser outros algoritmos fora o sha256
 
//const transaction = {
   /* from: 'a',
    to:'b',
    amount: 1
}
//const str= JSON.stringify(transaction);

//const hash = sha256(str).toString();
//console.log(hash);

//transaction.from = 'c';
//console.log(sha256(JSON.stringify(transaction)).toString())
//const bloco1 = new Block(); como nao foi passado nada para ele sera o bloco geness
*/
const Block = require('./Block');
const bloco1 = new Block();
console.log(bloco1);
