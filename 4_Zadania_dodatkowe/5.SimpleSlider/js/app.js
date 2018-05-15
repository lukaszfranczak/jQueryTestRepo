$(document).ready(function () {
    // var elementListLi = $('li');

    var $ul = $('ul');

    var visibleImageIndex = 0;
    var imageWidth = $('img').width()+4;

    // Next picture switch

    $('#nextPicture').on('click', function () {
        visibleImageIndex++;
        if (visibleImageIndex>5) {
            visibleImageIndex=1;
        }
        $ul.animate({
            'right': imageWidth*visibleImageIndex
        });
    });

    // Previous picture switch

    $('#prevPicture').on('click', function () {
        visibleImageIndex--;
        if (visibleImageIndex<0) {
            visibleImageIndex=5;
        }
        $ul.animate({
            'right': imageWidth*visibleImageIndex
        });
    })
});

// Problemy:
// konieczność zmiany wysokości na 200px
// przesuwanie o 404 piksele a nie 400
// zastosowanie right zamiast left - przy left konieczne było stosowanie ujemnych wartości
// zastanawiam się co miało na celu wyciąganie do zmiennej listy elementów li
