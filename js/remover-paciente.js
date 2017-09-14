//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//pacientes.forEach(function(paciente){
	
tabela.addEventListener("dblclick", function(event){

	event.target.parentNode.classList.add("fadeOut");
		
	setTimeout(function(){
		event.target.parentNode.remove();	
	}, 1000);
		

		//var alvoDoEvento = event.target;
		//var paiDoAlvo = alvoDoEvento.parentNode;
		//paiDoAlvo.remove();

		//		this.remove();

});


//});