
/*
//Função nominal com parâmetro obrigatório

// undefined é um tipo de valor que não existe.
//null é um tipo de valor inválido.

// Uma função sem return é uma subrotina.
function escreve(nome, sobrenome) {
    const a = sobrenome;
    if(a === undefined) {
        console.log("a é undefined");
        console.log("Valor de a", a, "\n");
        console.log("valor de sobrenome", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Anyelle");

// Função nominal que retorna valor.
function soma(a, b) {
    return Number(a) + Number(b);
}

const resultado = soma(1, 2);

console.log(soma(3, 5));


// Expressão de função = uma função é atribuida a um contexto por exemplo uma variável
const exibe = function(x) {
    return `Exibindo parâmentro ${x}`;
}

console.log(exibe("chocolate"));
// Onde o JavaScript está sendp executado? Qual o contexto?
// Contexto: Navegador. this depende do contexto.
// No navegador o this é a window.

//Mas se você estiver usando a versão estrita do javascript o this não será a window.

// function andar() { this.velocidade = 1;}
//-----------------------

// this - é a variavel interna do JavaScript
//this ele ten comportamentos diferentes dependendo de onde ele está sendo usado.
// refere-se a um objeto.

//objeto glogal
*/
let empresa = this; // window

//quando criamos um objeto, criamos um escopo.
// quando usamos o this dentro de um objeto, o this é o objeto.
const aluno = {
    nome: "Anyelle",
    matricula: 123,
    executar: function(){
        return `Exibindo de dentro de um método ${this.nome}`
        ;
    },
};

console.log(aluno.executar());
console.log(aluno.nome);

// estrito - this é  undefined.
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global.

function globalObj() {
    // "use strict"; //this vira undefined;
    return this;
}
window.document.write('<h2>Escrevendo no Body</h2>');
document.write(globalObj());

//globalObj().alert("Vai Corinthians!");

//Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = () =>{
    console.log("Chamando de dentro de uma arrow function");
    //Interpolação de variável é chamar uma variável dentro de uma string; Template String.
    console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
    //indentação é um código escrito de forma legível, que respeita hierarquia {dá um espaçço, para facilitar a leitura do código. um código. um código indentado é uma das meneiras de manter um código limpo.}
};

const funcao3 = a => 
    console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Anyelle Lago");

// novo JavaScript ES2017
//spread operator ...

const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informados foram: ${primeiro}, ${segundo} - ${restante[5]}. Todos os demais são ${restante.join(', ')}`
    );
};

carros("DelRey", "Brasilia", "Belina", "Fusca", "Variant", "Parati", "Monza", "scort", "fiat 147", "D-20", "kombi",
"BWM", "Opala", "Land-Rover", "Gurgel", "Maverick", "Marea");

const frutas = ['Guaraná','Cupuaçu','Açaí'];
const todasFrutas = [...frutas, "banana", "abacaxi"];


console.log("Todas as Frutas", todasFrutas);



//destructuring assignment
// Atribuição por desestruturação.
let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log('Exibindo o primeiro: ', primeiro);
console.log('Exibindo o resto: ', resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(" - "));

// const [p, s, t, q] = meuArray;
// const [...p, q] = meuArray;
// console.log("exibindo o quarto elemento", q);
const [q, ...p] = meuArray.reverse();
console.log(p.reverse());