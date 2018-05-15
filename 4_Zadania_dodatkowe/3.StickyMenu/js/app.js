$(document).ready(function () {
    var $menu = $('.menu');
    var $navPosition = $('nav').position().top;

    // Fix on scroll

    $(window).on('scroll', function () {
        var topPosition = $(this).scrollTop();
        if (topPosition>$navPosition) {
            $menu.addClass('sticky');
        } else {
            $menu.removeClass('sticky');
        }
    });

    // Change fix setup on window resize

    $(window).on('resize', function () {
        // if (elementMenu.hasClass('sticky')) {
        $navPosition = $('nav').position().top;
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