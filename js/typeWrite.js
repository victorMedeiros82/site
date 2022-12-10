//função que escreve o texto
export function typeWrite(el) {
    const textoArray = el.innerHTML.split("");
    el.innerHTML = "";
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            el.innerHTML += letra;
        }, 100 * i);
    });
}