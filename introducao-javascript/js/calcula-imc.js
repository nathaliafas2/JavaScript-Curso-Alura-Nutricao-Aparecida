
//alert("Hello World!!");
//console.log("Hello World");
//console.log(document);			
//Permite Buscar Pequena Parte do HTML
//console.log(document.querySelector("h1"));

//Cria uma variável e busca dentro do selector a Class Título
//var titulo = document.querySelector(".Titulo");
//Alterar conteúdo da classe título
//titulo.textContent = "Tabela Nutricional Clientes";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

		// Se a altura e peso estiverem válidos - Efetua o calculo do ICM 
	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura);
		//var imc = peso / (altura * altura);
		tdImc.textContent = imc;
	}

	//Efetua Validação do Peso
	if (!pesoEhValido) {
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	//Efetua validação da altura
	if (!alturaEhValida) {
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}


	//Função em JS que recebe Peso e altura (validos) e retorna o IMC

	function validaPeso(peso){
		if(peso >= 0 && peso < 1000)
		return true;
		else
		return false;
	}

	function validaAltura(altura){
		if(altura >= 0 && altura <= 2.00)
		return true;
		else
		return false;
	}


	function calculaImc(peso, altura) {
		var imc = 0;
	
		imc = peso / (altura * altura);
	
		return imc.toFixed(2);
	}
}

	/*

	var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function () {
		console.log("Oi cliquei no botão");
	})

	console.log(botaoAdicionar)

}

var titulo = document.querySelector("h1");
console.log(titulo.classList);

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
	console.log("Olá eu fui clicado!");
}


//Teste Exercicio JavaScript

var botao = document.querySelector('#botao');

function botaoHandler() {

	alert('Botão clicado');
}

function outroHandler() {

	alert('Botão clicado também!');
}


botao.addEventListener('click', botaoHandler);
botao.addEventListener('click', outroHandler);

botao.onclick = botaoHandler;
botao.onclick = outroHandler; // Substitui O primeiro evento 
*/


