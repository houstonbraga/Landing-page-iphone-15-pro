const btn1 = document.getElementById('color1');
const btn2 = document.getElementById('color2');
const btn3 = document.getElementById('color3');
const btn4 = document.getElementById('color4');
const btnP = document.getElementById('colorP');
let conteudo = document.getElementById('conteudo');

btn1.addEventListener('click', () => {
    conteudo.src = 'img/black titanium.jpg';
});

btn2.addEventListener('click', () => {
    conteudo.src = 'img/white-titanium.jpg';
});

btn3.addEventListener('click', () => {
    conteudo.src = 'img/blue-titanium.jpg';
});

btn4.addEventListener('click', () => {
    conteudo.src = 'img/natural-titanium.jpg';
});

btnP.addEventListener('click', () => {
    conteudo.src = 'img/img-sessao cores.jpg';
});

