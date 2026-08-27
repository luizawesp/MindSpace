function trocarAba(id, event) {
    document.querySelectorAll('.conteudo').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.topicos').forEach(t => t.classList.remove('ativa'));
    event.target.classList.add('ativa');
}