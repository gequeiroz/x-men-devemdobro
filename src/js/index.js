//pega todos os personagens da lista

const personagens = document.querySelectorAll('.personagem');

//vê para qual personagem o mouse ta apontando e atribui uma classe.

personagens.forEach((personagem)=>{
    
    personagem.addEventListener('mouseenter',()=> {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'});
        }

        removerSelecaoDoPersonagem(personagem);

        mudaPersonanGrande(personagem);

        mudaNomeDoPersonagemGrande(personagem);

        mudaDescricaoDopersonagemGrande(personagem);
    })
})

function mudaDescricaoDopersonagemGrande(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function mudaNomeDoPersonagemGrande(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function mudaPersonanGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
}

