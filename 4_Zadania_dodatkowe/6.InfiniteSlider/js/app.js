$(document).ready(function () {
   // console.log('test');

    var elementPrevButton = $('#prevPicture');
    var elementNextButton = $('#nextPicture');
    // console.log(elementPrevButton, elementNextButton);

    var elementListLi = $('li');
    // console.log(elementListLi);

    var elementUl = $('ul');
    // console.log(elementUl);

    var visibleImageIndex = 0;
    var imageWidth = 404;
    // console.log(visibleImageIndex, imageWidth);

    var firstElement = elementListLi.first().clone();
    var lastElement = elementListLi.last().clone();
    // console.log(firstElement);
    // console.log(lastElement);
    elementUl.append(firstElement);
    elementUl.prepend(lastElement);

    // O ile wydawało się, że to poniżej działa to już przy przycisku prev jest totalny bajzel

    elementNextButton.on('click', function () {
        if (visibleImageIndex>6) {
            visibleImageIndex=0;
            elementUl.css('right', 0);
        }
        // console.log(visibleImageIndex);
        elementListLi.animate({
            'right': imageWidth*visibleImageIndex,
        },
            {
            complete: function() {
                visibleImageIndex++;            // spróbować z if - pytanie jednak nadal jak ogarnąć tę sekwencję
            }
        });

    });

    // elementPrevButton.on('click', function () {
    //     if (visibleImageIndex<0) {
    //         visibleImageIndex=6;
    //         elementUl.css('right', '2424px');
    //     }
    //     // console.log(visibleImageIndex);
    //     elementUl.animate({
    //             'right': imageWidth*visibleImageIndex,
    //         },
    //         {
    //             complete: function() {
    //                 visibleImageIndex--;
    //             }
    //         });
    //
    // });


});