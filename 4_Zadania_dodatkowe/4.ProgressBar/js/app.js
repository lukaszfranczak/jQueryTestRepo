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

        // barProgress.each(function(){
        //     if (barProgress.attr("id") === clickedBarId) {
        //     console.log(clickedBarId);
        //     }
        // });


        // barProgress.find(clickedBarId).addClass(clickedBarColor).css('width', clickedBarWidth);
        // barProgress.find(clickedBarId).addClass(clickedBarColor);
        // console.log(barProgress.find('#clickedBarId'));

        });

});