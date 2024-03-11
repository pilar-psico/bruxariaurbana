function abrirNav(){
    document.getElementById("menuOculto").style.width="180px";
    document.getElementById("principal").style.marginRight="180px";
}
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginRight="0";
}

function toggleMode() {
    const html = document.documentElement
        html.classList.toggle("light");

}