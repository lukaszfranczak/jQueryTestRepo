$(document).ready(function () {
    $('h1').on('click', function () {
        $('p').hide();
        $(this).next().toggle();
    })
});

// Problem jest taki, ze h1 przeskakuja. Abstrahujac od tego ze na stronie powinien byc tylko jeden h1
