$(document).ready(function () {
   // console.log('test');

    var elementNav = $('nav');
    var elementMenu = $('.menu');
    var elementNavPosition = elementNav.position().top;
    // console.log(elementNav, elementMenu);
    // console.log(elementNavPosition);

    $(window).on('scroll', function () {
        // console.log('test');
        // console.log(elementNavPosition);
        var topPosition = $(this).scrollTop();
        if (topPosition>elementNavPosition) {
            elementMenu.addClass('sticky');
        } else {
            elementMenu.removeClass('sticky');
        }
    });

    $(window).on('resize', function () {
        // if (elementMenu.hasClass('sticky')) {
        elementNavPosition = elementNav.position().top;
        // } else {
        //     elementMenuPosition = elementMenu.position().top;
        // }
    });

});


// Zrobiłem event na resize i przypisałem nową wartość do zmiennej z pozycją od razu dla nav.
//     Nie do końca więc rozuemiem co ma na celu sprawdzanie tego czy element ma klasę sticky
// z poniższego polecenia

// Punkt 7
// Podczas zmiany szerokości okna dystans menu od górnej belki będzie się zmieniał.
//     W tym celu utworzyliśmy event resize. Musimy tutaj sprawdzać ponownie dystans dla menu.
//     Zrób warunek, który będzie sprawdzał tę odległość (jeżeli element menu ma klasę sticky)
// i podstaw pod tą samą zmienną co wcześniej. W przeciwnym przypadku pobierz odległość
// od górnej belki dla elementu nav.