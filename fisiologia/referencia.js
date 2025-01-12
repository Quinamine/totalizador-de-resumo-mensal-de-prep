"use strict"
const referencia = {
    retornarLinha(inputTarget) {
        const linhasDosInputs = inputTarget.parentElement.parentElement.children;
        const indicadores = document.querySelectorAll(".ficha__col-de-indicadores span");
        const indicadorOutput = document.querySelector(".reference__output--indicador");
        let linhaDoInputTarget;
        for (let i in linhasDosInputs) {
            if(inputTarget.parentElement === linhasDosInputs[i]) linhaDoInputTarget = i;
        }
        let indicador = indicadores[linhaDoInputTarget].textContent;
        indicadorOutput.value = `${indicador}`;
    },
    retornarColuna(inputTarget) {
        const titulosDasColunas = document.querySelectorAll(".ficha__col-title");
        const colunaOutput = document.querySelector(".reference__output--idade");
        const faixasEtarias = document.querySelectorAll(".ficha__header__indicador--rotate");
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetIndex = 0;
        for (let i in inputTargetAndSiblings) {
            if(inputTarget === inputTargetAndSiblings[i]) inputTargetIndex = i;
        }
        let colTitleIndex = inputTargetIndex < 5 ? 0 
        : inputTargetIndex < 10 ? 1 
        : inputTargetIndex < 12 ? 2 
        : 3; 
        colunaOutput.value = `${titulosDasColunas[colTitleIndex].textContent}: ${faixasEtarias[inputTargetIndex].textContent}`;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll("[data-total], .input-celular--focus");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarLinha(inputCelular);
            referencia.retornarColuna(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;