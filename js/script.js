/**FUNÇÃO PARA OCULTAR AS SESSÕES**/
var sessaoMenu = document.getElementById("trabalhosMenu");
var sessaoPublico = document.getElementById("trabalhosPublico");
var sessaoComercial = document.getElementById("trabalhosComercial");
var sessaoResidencial = document.getElementById("trabalhosResidencial");

sessaoComercial.style.display = "none";
sessaoResidencial.style.display = "none";
sessaoPublico.style.display = "none";

//FUNÇÃO DOS BOTÕES DO MENU DE TRABALHOS

var botoesMenu = document.getElementsByClassName("botaoMenu");
alert(botoesMenu.length);

for(i = 0; i < 3; i++){
    botoesMenu[i].addEventListener("click", mostrarTrabalhos);
}

document.getElementById("botaoComercial").addEventListener("click", mostrarComercial);
document.getElementById("botaoResidencial").addEventListener("click", mostrarResidencial);
document.getElementById("botaoPublico").addEventListener("click", mostrarPublico);

function validarEmail(evt){
    var emailSpan = document.getElementById("emailSpan").style;    
    var email = document.getElementById("email");    
    var posicaoArroba = email.value.indexOf("@");
    var estiloEmail = email.style;
    
    if(email.value == "" || posicaoArroba < 3){
        emailSpan.display = "block";
        email.style.borderBottomColor = "red";
        evt.preventDefault();
    }
}

//FUNÇÃO PARA FECHAR O MODAL
//document.getElementById("closeModal").addEventListener("click", fecharModal);

function mostrarTrabalhos(){
    sessaoMenu.style.display = "inline";
    sessaoComercial.style.display = "none";
    sessaoResidencial.style.display = "none";
    sessaoPublico.style.display = "none";
}

function mostrarComercial(){
    sessaoMenu.style.display = "none";
    sessaoComercial.style.display = "inline";
    sessaoResidencial.style.display = "none";
    sessaoPublico.style.display = "none";
}

function mostrarResidencial(){
    sessaoMenu.style.display = "none";
    sessaoComercial.style.display = "none";
    sessaoResidencial.style.display = "inline";
    sessaoPublico.style.display = "none";
}

function mostrarPublico(){
    sessaoMenu.style.display = "none";
    sessaoComercial.style.display = "none";
    sessaoResidencial.style.display = "none";
    sessaoPublico.style.display = "inline";
}