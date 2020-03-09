
//var pacientes = document.querySelectorAll('.paciente');

//remover quando o foco é a tabela toda, incluindo elementos novos
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; //representa a TR (pai)
    //paiDoAlvo.remove();

    if (event.target.tagName == 'TD') {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
})

//remover somente com foco em uma lista antiga
//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function(){
//        console.log("fui clicado");
//        this.remove();
//    })
//})