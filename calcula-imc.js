//para mudar o título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//para pegar os dados do html
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    //para verificar se altura e peso são válidos e então calcular o imc
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    } 
    
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido");
    } 

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 300){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //arrendondar para 2 casas decimais
}
