$(document).ready(function () {
   // console.log('test');

    var elementPrevButton = $('#prevPicture');
    var elementNextButton = $('#nextPicture');
    // console.log(elementPrevButton, elementNextButton);

    var elementListLi = $('li');
    // console.log(elementListLi);

    var elementUl = $('ul');

    var visibleImageIndex = 0;
    var imageWidth = 404;
    // console.log(visibleImageIndex, imageWidth);

    elementNextButton.on('click', function () {
        visibleImageIndex++;
        if (visibleImageIndex>5) {
            visibleImageIndex=1;
        }
        // console.log(visibleImageIndex);
        elementUl.animate({
            'right': imageWidth*visibleImageIndex
        });
    });

    elementPrevButton.on('click', function () {
        visibleImageIndex--;
        if (visibleImageIndex<0) {
            visibleImageIndex=5;
        }
        // console.log(visibleImageIndex);
        elementUl.animate({
            'right': imageWidth*visibleImageIndex
        });
    })

});

// Problemy:
// konieczność zmiany wysokości na 200px
// przesuwanie o 404 piksele a nie 400
// zastosowanie right zamiast left - przy left konieczne było stosowanie ujemnych wartości
// zastanawiam się co miało na celu wyciąganie do zmiennej listy elementów li
