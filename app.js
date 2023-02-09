'use strict'

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const calcular = document.getElementById('calcular');
const result = document.getElementById('result')
const resulta = document.getElementById('resulta')
const form = document.getElementById('form')

function somar(){
    console.log (Number(numero1.value) + Number(numero2.value))
    result.innerHTML = 'resultado: ' + ((Number(numero1.value) + Number(numero2.value))/2)
    resulta.value = 'Status: ' + ((Number(numero1.value) + Number(numero2.value))/2)
    
    if((Number(numero1.value) + Number(numero2.value))/2 <=5){
        form.classList.add('sombra_vermelha')
        form.classList.remove('sombra_verde')
        resulta.value = 'Status: Reprovado '

    }else if((Number(numero1.value) + Number(numero2.value))/2 > 5 && (Number(numero1.value) + Number(numero2.value))/2 <= 10 ){
        form.classList.add('sombra_verde')
        form.classList.remove('sombra_vermelha')
        resulta.value = ('Status: Aprovado ')
    }else{
        form.classList.remove('sombra_vermelha')
        form.classList.remove('sombra_verde')
        result.innerHTML = ('resultado: Invalido ');
        resulta.value = ('Status: Invalido');
    }
    
}

calcular.addEventListener("click", somar)
