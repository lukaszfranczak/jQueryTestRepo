$(document).ready(function () {
   // console.log('test');
    var elementListH1 = $('h1');
    var elementListP = $('p');
    // console.log(elementListH1, elementListP);

    elementListH1.on('click', function () {
        // console.log('h1 click');
        elementListP.hide();
        $(this).next().toggle();
    })
});

// Problem jest taki, ze h1 przeskakuja. Abstrahujac od tego ze na stronie powinien byc tylko jeden h1
