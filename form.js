//para ativar o formulário
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //para previnir que o refresh apague os dados antes de guardá-los
    
    //capturar os dados pelo javascript
    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
   
    //limpar os campos
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente) {
    //criar td/tr pacientes 
    var pacienteTr = montaTr(paciente);
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //coloca paciente na tabela
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    //adicionando classes
    pacienteTr.classList.add("paciente");

    //colocando td's dentro do tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    if(!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido.");
    }
    if(!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida.")
    }
    if(paciente.nome.length ==0){
        erros.push("O nome não pode estar em branco.")
    }
    if(paciente.peso.length ==0){
        erros.push("O peso não pode estar em branco.")
    }
    if(paciente.altura.length ==0){
        erros.push("A altura não pode estar em branco.")
    }
    if(paciente.gordura.length ==0){
        erros.push("A gordura não pode estar em branco.")
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa a tela de erros
    erros.forEach(function(erro){ //semântico ao "for", considerando var i = 0 e i > .length 
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}