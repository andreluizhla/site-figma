//Código do Menu:

const navbar = document.querySelector('.navbar')

document.querySelector('.btn-menu').onclick=()=>{
    navbar.classList.toggle('active')
    atualizarPosicao()
    searchForm.classList.remove('active'); 
}

window.onscroll=()=>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active'); 
}

//Código do Modo Noturno:
let p = document.querySelectorAll('.texto-not')
let body = document.querySelector('#body')

document.querySelector('.btn-theme').onclick=()=>{
    body.classList.toggle('dark-body')
    navbar.classList.toggle('dark-menu')
    navbar.classList.toggle('navbar-normal')
    p.forEach(element => element.classList.toggle('escuro'))
}

//Código para a barra de pesquisa:
let searchForm = document.querySelector('.search-form');

document.querySelector(".btn-search").onclick=()=>{
    searchForm.classList.toggle('active'); 
    navbar.classList.remove('active');
}

//Código para a barra lateral acompanhar a altura do header:
const header = document.querySelector('.header')
function atualizarPosicao(){
    const alturaHeader = header.offsetHeight
    navbar.style.top = `${alturaHeader}px`
    navbar.style.height = `calc(100vh - ${alturaHeader})`
}