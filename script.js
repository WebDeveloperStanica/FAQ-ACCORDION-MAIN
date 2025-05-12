let btn = document.querySelectorAll('.plus-btn');
let textReveal = document.querySelectorAll('.hideJs');

    for (let i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', function() {

            textReveal[i].classList.toggle('reveal');
        });
    };
