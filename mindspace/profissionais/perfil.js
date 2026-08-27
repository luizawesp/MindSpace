// cria a função de trocar aba e o evento (de clicar e direcioar)
function trocarAba(id, event) {
// seleciona todos as classes com .conteudo
    document.querySelectorAll('.conteudo').forEach(div => {
        div.style.display = 'none'; // esconde cada um 
    });
    document.getElementById(id).style.display = 'block'; // pega o elemento selecionado e mostra ele
// seleciona todos os elementos com .topicos e remove a classe (selecionada)
    document.querySelectorAll('.topicos').forEach(t => t.classList.remove('selecionada')); // garante que nenhuma aba fique destacada
// adiciona a classe selecionada so o elemento que foi clicado
    event.target.classList.add('selecionada'); // destaca só o clicado
}