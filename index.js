'use strict';

/* CSS animation classes settings |
 Configuración de las clases para las animaciones */
const allCards = document.querySelectorAll('.container-member');


if (window.innerWidth < 990) {
    less990px(allCards);
} else {
    greater990px(allCards);
}

function less990px(array) {
    for (let i = 1; i <= array.length; i++) {
        let card = array[i - 1];
        
        if (i % 2) {
            card.style.opacity = 0;
            card.style.right = '110%';
            card.classList.add('less-from-left'); 
        } else {
            card.style.opacity = 0;
            card.style.left = '110%';
            card.classList.add('less-from-right');
        }
    }
}
function greater990px(array) {
    for (let i = 0; i < array.length; i++) {
        let card = array[i];
        
        if (i === 0 || i == 3) {
            card.style.right = '110%';
            card.classList.add('greater-from-left');
        } else if (i == 1 || i == 4) {
            card.style.opacity = 0;
            card.classList.add('greater-center');
        } else {
            card.style.left = '110%';
            card.classList.add('greater-from-right');
        }
    }
}


/* Footer link settings |
 Configuración del enlace del Footer */
const footerLink = document.querySelector('#footer a'),
      profiles = ['https://github.com/javiervaleriano',
      'https://codepen.io/javiervaleriano',
      'https://www.linkedin.com/in/javier-valeriano1508/',
      'https://devchallenges.io/portfolio/javiervaleriano'];

footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];