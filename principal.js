var th1 = document.querySelector(".titulo");

th1.textContent="Aparecida Nutricionista SA";

var pacientes= document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente =  pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso");
	var tdaltura = paciente.querySelector(".info-altura");


	var peso = tdpeso.textContent;
	var altura = tdaltura.textContent;

	var pesoEhValido= (peso > 0 && peso < 1000);
	var alturaEhValida=(altura > 0 && altura < 3.00);

	var tdimc = paciente.querySelector(".info-imc");
	
	if  (!(pesoEhValido)) {
	
		tdimc.textContent="Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (!(alturaEhValida)){

		tdimc.textContent="Altura inválida.";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida){
		var imc = peso/(altura*altura);	
		tdimc.textContent = imc.toFixed(2);
	}

}



var botaoAdicionar =  document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault();
	
    var form = document.querySelector("#form-adiciona");
    
    var  nome = form.nome.value;
    var  peso =  form.peso.value;
    var  altura = form.altura.value;
    var  gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //imcTd.textContent = imcTd;

    pacienteTr.appendChield(nomeTd);
    pacienteTr.appendChield(pesod);
    pacienteTr.appendChield(alturaTd);
    pacienteTr.appendChield(gorduraTd);
    //pacienteTr.appendChield(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChield("pacienteTr");

    //cap 4 terminado.

});




