let btn = document.querySelectorAll('.plus-btn'); //Selecting the buttons and store it in the btn variable
let textReveal = document.querySelectorAll('.hideJs'); //Selecting the paragraphs and store it in the textReveal variable

    for (let i = 0; i < btn.length; i++) {  //Looping through the buttons

        btn[i].addEventListener('click', function() {  //Adding event listener

            textReveal[i].classList.toggle('reveal');  //
            //Storing the btn in a img variable
            let img = btn[i].querySelector('img');
            //Swaping plus and minus icon signs by using a if/else conditional
            if(img.src.includes('icon-plus.svg')) {
                img.src = '/assets/images/icon-minus.svg';
            } else {
                img.src = '/assets/images/icon-plus.svg';
            }
        });
    };
