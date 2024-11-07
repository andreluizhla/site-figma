//Variáveis:
let tema
const navbar = document.querySelector('.navbar')
let body = document.querySelector('#body')
let p = document.querySelectorAll('.texto-not')
let searchForm = document.querySelector('.search-form');
const header = document.querySelector('.header')

if (body.classList.contains('dark-body')){
    
    localStorage.setItem(true, tema_escuro)
}

//Código do Menu:
document.querySelector('.btn-menu').onclick=()=>{
    navbar.classList.toggle('active')
    atualizarPosicao()
    searchForm.classList.remove('active'); 
}

//Quando a página for movida, ele desativa a barra lateral e pesquisa:
window.onscroll=()=>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active'); 
}

function mudar_tema(){
    body.classList.toggle('dark-body')
    navbar.classList.toggle('dark-menu')
    navbar.classList.toggle('navbar-normal')
    p.forEach(element => element.classList.toggle('escuro'))
    
    armazenarTema()
    
}

//Código para se a página estiver escuro ele persistir:
function armazenarTema(){
    if (body.classList.contains('dark-body')){
        localStorage.setItem('tema', 'escuro')
    } else {
        localStorage.setItem('tema', 'claro')
    }
}


//Código do Modo Noturno:
document.querySelector('.btn-theme').onclick=()=>{
    mudar_tema()
}


//Código para a barra de pesquisa:
document.querySelector(".btn-search").onclick=()=>{
    searchForm.classList.toggle('active'); 
    navbar.classList.remove('active');
}


//Código para a barra lateral acompanhar a altura do header:
function atualizarPosicao(){
    const alturaHeader = header.offsetHeight
    navbar.style.top = `${alturaHeader}px`
    navbar.style.height = `calc(100vh - ${alturaHeader})`
}

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    mudar_tema();
}
