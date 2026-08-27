
// Adicionar alteração de texto do médico selecionado no modal_agendar.
// Quando o usuário clicar no botão de horário disponível deste médico na página de agendamento, o nome do médico deve ser atualizado no modal_agendar para refletir a escolha do usuário.  

// Mapear médicos com suas fotos
const medicosInfo = {
    "Dr. Guilherme Silva": "foto_guilherme",
    "Dr. João Pedro": "foto_joao",
    "Dra. Maria Silva": "foto_maria",
    "Dra. Joselaine Valaski": "foto_joselaine",
    "Dr. Evandro Zatti": "foto_evandro"
};

// Pegar o botão de confirmação do ID do médico escolhido.
let botaoConfirmarMedico = document.getElementById("btn_ir_para_consultas");

//Adicinar um evento de clique para identificar o médico e atualizar o texto do modal.
botaoConfirmarMedico.addEventListener("click", function(){
let inputSelecionado = document.querySelector('input[name="horario_escolhido"]:checked');
let inputData = document.querySelector('input[name="data_escolhida"]:checked');
if (inputSelecionado && inputData){
    
    let medico = inputSelecionado.dataset.medico; // Pegando o nome atribuído.
    let horario = inputSelecionado.value; // Pegando o horário atribuído.
    let data =  inputData.value; // Pegando a data escolhida.
    let fotoMedico = medicosInfo[medico] || "medico_foto"; // Pegando a foto do médico
    
    localStorage.setItem("médicoSelecionado", medico); //Guardando elementos na memoria do computador.
    localStorage.setItem("horárioSelecionado", horario);
    localStorage.setItem("dataSelecionada", data);
    localStorage.setItem("fotoMédicoSelecionado", fotoMedico); // Guardando a foto do médico

    console.log("Médico selecionado:" + medico + "às" + horario)
    window.location.href = "minhas_consultas.html"; // Redirecionar para a página de minhas consultas.
} else{
    alert("Por favor, selecione um horário para agendar a consulta.");
}

})

