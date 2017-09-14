var botaoAdicionar =  document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault();
	
    var form= document.querySelector("#formulario");
    
    var paciente = obtemPacienteFormulario(form);

    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente);
   //var erros[];

    if (erros.length>0){
        exibeMensagemDeErro(erros);
        //var mensagemErro = document.querySelector("#mensagem-erro");
        //mensagemErro.textContent=erro;

        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    
    var mensagemErros = document.querySelector("#mensagem-erro");
    
    mensagemErros.innerHTML="";
    
    form.reset();
});

//=======Funções auxiliares============

  function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length==0){
        erros.push("O campo nome deve ser preenchido");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagemDeErro(erros){

  var ul =  document.querySelector("#mensagem-erro");
  ul.innerHTML ="";
  
  erros.forEach(function(erro){
    
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);

  });

}

function obtemPacienteFormulario(form){

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)


        }
        return paciente;
    
    }

    function montaTd(dado, classe) {
        
        var td = document.createElement("td");
        
        td.classList.add(classe);
        td.textContent = dado;

        return td;
    }

    function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    
    pacienteTr.classList.add("paciente");
    
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;  
}




