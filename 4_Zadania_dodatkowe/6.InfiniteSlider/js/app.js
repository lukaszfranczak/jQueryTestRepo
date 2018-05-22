$(document).ready(function () {

    var $prevButton = $('#prevPicture');
    var $nextButton = $('#nextPicture');

    var $liList = $('li');

    var $ul = $('ul');

    var visibleImageIndex = 0;
    var imageWidth = $('img').width()+4;   // I tried with outerwidth, css(width) etc but still I have to add 4 because of the space between images; reset of all elements also didn't help

    var $firstLi = $liList.first().clone();
    var $lastLi = $liList.last().clone();
    $ul.append($firstLi);
    $ul.prepend($lastLi);

    $ul.css('right', imageWidth+'px').css('width', imageWidth*8+'px');

    function move(parameter) {
        if (parameter===1) {
            visibleImageIndex++;
        }
        $ul.animate({
                'right': imageWidth * visibleImageIndex,
            },
            {
                complete: function () {
                    if (parameter===1) {
                        if (visibleImageIndex > $liList.length) {
                            visibleImageIndex = 1;
                            $ul.css('right', imageWidth);
                        }
                    } else if (parameter===-1) {
                        if (visibleImageIndex < 1) {
                            visibleImageIndex = $liList.length;
                            $ul.css('right', imageWidth*7);
                        }
                    }

                }
            });
        if (parameter===-1) {
            visibleImageIndex--;
        }
    }

    var interval;

    $nextButton.on('click', function () {
        clearInterval(interval);
        interval = setInterval(function() {
            move(1);
            }, 1000);
    });

    $prevButton.on('click', function () {
        clearInterval(interval);
        interval = setInterval(function() {
            move(-1);
            }, 1000);
    });


});