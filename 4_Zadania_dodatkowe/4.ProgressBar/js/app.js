$(document).ready(function () {
    // console.log('test');

    var barButtons = $('[class*=changeBar]');
    console.log(barButtons);

    var barProgress = $('[id^=bar]');
    console.log(barProgress);

    barButtons.on('click', function () {
        // console.log('click');
        var clickedBarWidth = $(this).data('width');
        var clickedBarColor = $(this).data('color');
        var clickedBarId = $(this).data('bar');
        // console.log(clickedBarWidth);

        barProgress
            .filter('#'+clickedBarId)
            .removeClass(['blue', 'orange', 'green'])
            .addClass(clickedBarColor)
            .animate({width: clickedBarWidth});

    });

});