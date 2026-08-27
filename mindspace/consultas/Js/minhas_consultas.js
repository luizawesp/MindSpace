//Pegando os objetos da memória
let nomeGuardado = localStorage.getItem("médicoSelecionado");
let horarioGuardado = localStorage.getItem("horárioSelecionado");
let dataGuardada = localStorage.getItem("dataSelecionada");
let fotoGuardada = localStorage.getItem("fotoMédicoSelecionado");

//Exibindo os dados na página de minhas consultas.
function abrirModal() {
        document.getElementById('overlay').classList.add('visivel');
    }

function fecharModal() {
        document.getElementById('overlay').classList.remove('visivel');
    }

function confirmarCancelamento() {
        fecharModal();

        const toast = document.createElement('div');
        toast.textContent = 'Consulta cancelada com sucesso!';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
            padding: 14px 24px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 15px;
            z-index: 999;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    document.getElementById('overlay').addEventListener('click', function(e) {
        if (e.target === this) fecharModal();
    });




let nome_Medico = document.getElementById("nome_medico_selecionado");
let horario_Consulta = document.getElementById("horario_consulta_selecionado");
let data_Consulta = document.getElementById("data_consulta_selecionada");
let foto_Medico = document.getElementById("foto_medico_consulta");

nome_Medico.textContent = nomeGuardado;
horario_Consulta.textContent = horarioGuardado;
data_Consulta.textContent = dataGuardada;
if (fotoGuardada) {
    foto_Medico.src = fotoGuardada;}
