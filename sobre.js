let base = document.getElementById('base');
let nuvem = document.getElementById('nuvem');
let montanha = document.getElementById('montanha');
let grama = document.getElementById('grama');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    base.style.marginTop = value * .2 + 'px';
    nuvem.style.marginTop = value * .5 + 'px';
    montanha.style.marginTop = value * .4 + 'px';
    grama.style.marginTop = value * .4 + 'px';
}); 