let calc = document.getElementById("calcular");
let limp = document.getElementById("limpar")


function calcular() {
    let ft1 = document.getElementById('fat1').value
    let ft12 = document.getElementById('fat12').value
    let resultado = document.getElementById("resultado")
    let aliqt = 0




    if (ft1 !== '' && ft12 !== '') {




         if ( ft12 <= 180000) {
            pct = 0.040
            margemDeduzir = 0;

        } else if (ft12 > 180000) {
            pct = 0.073
            margemDeduzir = 5940;

        } else if (ft12 > 360000) {
            pct = 0.095
            margemDeduzir = 13860;

        } else if (ft12 > 720.000) {
            pct = 0.1070
            margemDeduzir = 22.500;

        } else if (ft12 > 1.800000) {
            pct = 0.1430
            margemDeduzir = 87.300;

        }
        else if (ft12 > 3.600000) {
            pct = 0.1900
            margemDeduzir = 378.000;

        } else if (ft12 > 4.800000) {
            resultado.textContent = 'VOCÊ ESTA DESENQUADRADO DO SIMPLES NACIONAL';

        }

        aliqt = ft12 * pct
        aliqt = aliqt - margemDeduzir
        aliqt = aliqt / ft12
        
        let valor = ft1 * aliqt
    

        resultado.textContent = `SEU IMPOSTO A RECOLHER É: ${valor.toFixed(2)} `;

    } else {
        resultado.textContent = '<--PREENCHA TODOS OS CAMPOS!-->';
    }
  


}

function limpar() {
    let ft1 = document.getElementById('fat1')
    let ft12 = document.getElementById('fat12')
    ft1.value = '';
    ft12.value = '';

}
