$(document).ready(function () {
   // console.log('test');

    var elementPrevButton = $('#prevPicture');
    var elementNextButton = $('#nextPicture');
    // console.log(elementPrevButton, elementNextButton);

    var elementListLi = $('li');
    // console.log(elementListLi);

    var elementUl = $('ul');
    // console.log(elementUl);

    var visibleImageIndex = 1;
    var imageWidth = 404;
    // console.log(visibleImageIndex, imageWidth);

    var firstElement = elementListLi.first().clone();
    var lastElement = elementListLi.last().clone();
    // console.log(firstElement);
    // console.log(lastElement);
    elementUl.append(firstElement);
    elementUl.prepend(lastElement);

    elementNextButton.on('click', function () {
        visibleImageIndex++;
        // if (visibleImageIndex>5) {
        //     visibleImageIndex=1;
        // }
        // console.log(visibleImageIndex);
        elementUl.animate({
            'right': imageWidth*visibleImageIndex,

        },
            {
            complete: function() {
                console.log('ok');
            }
        });
    });


});