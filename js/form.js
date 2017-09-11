var botaoAdicionar =  document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault();
	
    var form= document.querySelector("#formulario");
    
    var  nome = form.nome.value;
    var  peso =  form.peso.value;
    var  altura = form.altura.value;
    var  gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //imcTd.textContent = imcTd;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChield(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    //cap 4 terminado.

});
