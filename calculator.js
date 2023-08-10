var lugardenumeros = document.querySelector('.placen')
var valor1 = document.querySelector('.valor1')
var valor2 = document.querySelector('.valor2')
var sinalzao = document.querySelector('.sinal')
const button = document.querySelector('.botao')
const adicao = document.querySelector('.adicao')
const multiplicacao = document.querySelector('.multiplicacao')
const subtracao = document.querySelector('.subtracao')
const divisao = document.querySelector('.divisao')
const numeros = document.querySelectorAll('.number')
const limpatela = document.querySelector('.limpatela')

//function para adicionar os numeros ao lugar de contas
function caixac(index){
   if(sinalzao.innerHTML == ''){
      valor1.innerHTML += index
   }else {
      valor2.innerHTML +=index
   }
}

numeros.forEach((item) => {
   item.addEventListener('click',()=>{
      caixac(item.value)
   } )
})

//function para adicionar o sinal ao lugar dee contas
function vaidarcerto(sinal){
   sinalzao.innerHTML = sinal
}

//function para realizar as contas
var somatotal = 0
function resultadototal(){
   if (sinalzao.innerHTML == '+'){
      somatotal = +valor1.innerHTML + +valor2.innerHTML
   }else if (sinalzao.innerHTML == '-'){
      somatotal = +valor1.innerHTML - +valor2.innerHTML
   }else if (sinalzao.innerHTML == 'x'){
      somatotal = +valor1.innerHTML * +valor2.innerHTML
   }else if (sinalzao.innerHTML == '/'){
      somatotal = +valor1.innerHTML / +valor2.innerHTML
   }
   valor1.innerHTML = somatotal
   valor2.innerHTML = ''
   sinalzao.innerHTML = ''
}

adicao.addEventListener('click', ()=>{
  vaidarcerto('+')
})
multiplicacao.addEventListener('click', ()=>{ vaidarcerto('x')
})
subtracao.addEventListener('click', ()=>{
   vaidarcerto('-')
})
divisao.addEventListener('click', ()=>{
   vaidarcerto('/')
})

button.addEventListener('click', resultadototal)

limpatela.addEventListener('click', ()=>{
  valor1.innerHTML = ''
  sinalzao.innerHTML = ''
  valor2.innerHTML = ''
})