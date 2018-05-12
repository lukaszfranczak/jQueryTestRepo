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

        // OPCJA 1

        // barProgress.each(function(){
        //     if ($(this).attr("id") === clickedBarId) {
        //     // console.log(clickedBarId);
        //         $(this).removeClass();
        //         $(this).addClass(['progress-bar', clickedBarColor]).css('width', clickedBarWidth);
        //     }
        // });

        // OPCJA 2

        barProgress.filter('#'+clickedBarId).removeClass().addClass(['progress-bar', clickedBarColor]).css('width', clickedBarWidth);

        });

});