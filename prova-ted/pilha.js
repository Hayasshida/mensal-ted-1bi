export function criarPilha(tamanhoDaPilha = 5) {
    return [...new Array(tamanhoDaPilha)]
}

// [12, 23, 12]

export function inserirItem(item, pilha = []) {

    if(pilha.includes(undefined)) {
        const indiceVazio = pilha.indexOf(undefined)
        pilha[indiceVazio] = item

        console.log(`Livro ${item.titulo} inserido na pilha`);

        return
    }

    console.log("> Pilha cheia");
}

export function retirarDaPilha(pilha = []) {

    const pilhaEstaVazia = pilha[0] == undefined

    if(pilhaEstaVazia) {
        console.log("> A pilha já está vazia");
        return
    }

    const indiceVazio = pilha.indexOf(undefined)

    

    if(indiceVazio == -1) {
        console.log(`> Livro ${ pilha[pilha.length - 1].titulo} retirado da pilha`);
        pilha.pop()
        return
    }

    console.log(`> Livro ${ pilha[indiceVazio - 1].titulo} retirado da pilha`);

    pilha[indiceVazio - 1] = undefined

}

export function verificarSeEstaNaPilha(titulo, pilha) {

    let livroEstaNaPilha = false

    pilha.forEach(item => {
        if(item != undefined){
            if(item.titulo == titulo) {
                livroEstaNaPilha = true
                return
            }
            
        }
    });

    return livroEstaNaPilha
}