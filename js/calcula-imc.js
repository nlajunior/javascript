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
		var imc = calculaImc(peso, altura); 
		tdimc.textContent = imc;
	}

}

th1.addEventListener("click", function(){
	alert("fui clicado");
});

function calculaImc(peso, altura){
	var imc=0
	imc = peso/(altura*altura);

	return imc.toFixed(2);	
}




