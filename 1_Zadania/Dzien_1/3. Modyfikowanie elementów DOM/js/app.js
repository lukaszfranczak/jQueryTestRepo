
$(document).ready(function () {

    // Zadanie z wykladowca

    var newDiv = $('<div class="panel">');
    $('.people').after(newDiv);

    // Zadanie 1

    function setColor(age) {
        if (age<16) {
            color = 'green';
        } else if (age>15 && age<41) {
            color = 'blue';
        } else if (age>41) {
            color = 'brown';
        }
        return color;
    }

    $('input[type=submit]').on('click', function() {
        // console.log('test');
        var name = $('#addUser').val();
        var age = $('#age').val();

        var newPerson = $('<li>', {'data-age': age});
        newPerson.text(name);
        var color = setColor(age);
        newPerson.css('color', color);

        $('.main').append(newPerson);

    });

    // Zadanie 2

    function newSpan(position) {
        var newSpanElement = $('<span>');
        newSpanElement.text('Jestem tutaj '+position);
        return newSpanElement;
    }

    $('.where-i-am').before(newSpan('before'));
    $('.where-i-am').after(newSpan('after'));
    $('.where-i-am').prepend(newSpan('prepend'));
    $('.where-i-am').append(newSpan('append'));

    // Zadanie 3

    var elementListClassBlock = $('.block');

    elementListClassBlock.on('click', function() {
       var newElement = $(this).clone();
       $(this).remove();
       $('.right').append(newElement);
    });

    // Zadanie 3 - inne rozwiązanie

    // elementListClassBlock.on("click", function () {
    //     if ($(this).parent().hasClass("left")){
    //         $(".right").append($(this));
    //     } else if ($(this).parent().hasClass("right")){
    //         $(".left").append($(this));
    //     }
    // })


});

// Pobierz do zmiennej wartość wpisaną do pola o id addUser.
//     Pobierz do zmiennej wartość wpisaną do pola o id age.
//     Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut data.