    let text = document.getElementById('text');
    let textp = document.getElementById('textp');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        leaf.style.marginTop = value * -1.5 + 'px';
        hill5.style.marginLeft = value * .3 + 'px';
        hill4.style.marginLeft = value * -1.5 + 'px';
        hill1.style.marginTop = value * .3 + 'px';
    }); 