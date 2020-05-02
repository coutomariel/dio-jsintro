function exibirAgradecimento(){
    //alert("Obrigado por cligar")
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    // window.location.href = "https://digitalinnovation.one/";
    window.open("https://digitalinnovation.one/");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function onload(){
    alert("Página carregada.");
}

function exibirValorSelecionado(elemento){
    console.log(elemento.value);
}

/*
-replace
-lowercase | Uppercase,
-date
-function
-variavel local / global
-dom
-getElement
-innerHTML
-onclick

-redirecianr para outra página
-onload

-onmouseover
-onmouseout

-onchange

*/