import { criarPilha, inserirItem, retirarDaPilha, verificarSeEstaNaPilha } from "./pilha.js";

let livros = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

const pilha = criarPilha(livros.length)

console.log("> Pilha inicial", pilha);
console.log("\n");

inserirArrayNaPilha(livros, pilha)
console.log("> Pilha com itens", pilha);
console.log("\n");

console.log("> Verficar na pilha", verificarSeEstaNaPilha("Chapéuzinho Vermelho", pilha));
console.log("> Verficar na pilha", verificarSeEstaNaPilha("Nome errado", pilha));


retirarTodosDaPilha(pilha)

console.log("> Pilha vazia", ...pilha);




function inserirArrayNaPilha(array, pilha) {
    array.forEach(livro => {
        inserirItem(livro, pilha)
    });
}

// [12, undefined, undefined]

function retirarTodosDaPilha(pilha = []) {

    const itensNaoVaziosNaPilha = pilha.filter(item => {
        if(item != undefined) {
            return true
        }

        return false
    })

    for(let i = 0; i < itensNaoVaziosNaPilha.length; i++) {
        retirarDaPilha(pilha)
    }
}