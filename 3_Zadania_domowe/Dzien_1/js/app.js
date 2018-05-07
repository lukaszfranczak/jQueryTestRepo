$(document).ready(function () {

    // Zadanie 1

    $('.border').css('border', '1px solid blue');


    // Zadanie 2

    var elementMenu = $('#menu');
    var elementMenuChildren = $('#menu').children();
    // console.dir(elementMenu);
    // console.dir(elementMenuChildren);
    elementMenuChildren.last().text('Jestem ostatnim dzieckiem');

    // Zadanie 3

    elementMenuChildren.each(function () {
        $(this).css('color', $(this).data('color'));
    });

    // Zadanie 4

    $('.login button').on('click', function () {

        var input = $(this).next();
        // console.log(input);
        if (input.attr('type') === 'password') {
            input.attr('type','text');
        } else {
            input.attr('type', 'password');
        }
    })


});

