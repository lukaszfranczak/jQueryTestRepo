

$(document).ready(function () {

    // Zadania z wykladowca - 1

    $('dt').on('mouseenter', function (event) {
        // console.log(event.target.innerHTML);
        console.log($(this).text());
        // console.log('test');
    });

    // Zadania z wykladowca - 2

    $('.hero-buttons button').on('click', function (event) {
        // console.log($(this).attr('data-feature'));
        console.log($(this).data('feature'));
    });

    // Zadanie 1

    $('.superhero-description').find('dd').hide();
    $('.superhero-description').find('dt').on('click', function(event) {
        event.preventDefault();
        $(this).next().toggle(100);
    });

    // Zadanie 2

    $('.shopping').find('button').on('click', function(event) {
        event.preventDefault();

        if ($(this).hasClass('added')) {
            $(this).removeClass();
            $(this).parent().css('border','1px solid #ccc');
            $(this).text('Dodaj');
        } else {
            $(this).addClass('added');
            $(this).parent().css('border','1px solid green');
            $(this).text('Dodano');
        }
    });

});


// Znajdź w pliku index.html element o klasie shopping, stwórz odpowiednią funkcję. Wykonaj następujące czynności:
//
//     Po kliknięciu w button Dodaj – ustaw mu klasę added oraz pojedynczemu elementowi zawierającemu produkt zmień obramowanie na zielone.
//     Podmień tekst na przycisku na Dodano.
//     Po ponownym kliknięciu zresetuj ustawienia elementu cart-item.