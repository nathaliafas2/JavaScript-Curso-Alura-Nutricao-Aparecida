// Selecionar Linhas
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

var tabela = document.querySelector("table");
var tabela = document.querySelector("table");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
// Para cada paciente que consta em pacientes, será add um escutado de evento. 
// evento dbclick
//pacientes.forEach(function(paciente) {
  //  paciente.addEventListener("dblclick", function() {

    //});
//});