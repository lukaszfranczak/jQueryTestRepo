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


    function moveRight() {
        visibleImageIndex++;
        elementUl.animate({
                'right': imageWidth * visibleImageIndex,
            },
            {
                complete: function () {
                    if (visibleImageIndex > 6) {
                        visibleImageIndex = 1;
                        elementUl.css('right', 404);
                        // clearInterval(interval);
                    }
                }
            });
    }

    function moveLeft() {
        elementUl.animate({
                'right': imageWidth * visibleImageIndex,
            },
            {
                complete: function () {
                    if (visibleImageIndex < 1) {
                        visibleImageIndex = 6;
                        elementUl.css('right', 2828);
                        // clearInterval(interval);
                    }
                }
            });
        visibleImageIndex--;
    }

    var interval;

    elementNextButton.on('click', function () {
        clearInterval(interval);
        interval = setInterval(moveRight, 1000);
    });

    elementPrevButton.on('click', function () {
        clearInterval(interval);
        interval = setInterval(moveLeft, 1000);
    });


});