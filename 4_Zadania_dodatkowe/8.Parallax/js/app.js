$(document).ready(function () {

    var elementScene = $('.scene');
    var elementList = $('.element');

    var oldMousePositionX = 0;
    var oldMousePositionY = 0;

    var currentMousePositionX = 0;
    var currentMousePositionY = 0;

    var mouseMoveX = 0;
    var mouseMoveY = 0;

    elementList
        .each(function() {
            $(this).css('z-index', $(this).data('z'))
        })
        .each(function() {
            $(this).css('left', $(this).data('x'))
        })
        .each(function() {
            $(this).css('top', $(this).data('y'))
        });

    elementScene.on('mouseenter', function (event) {
        oldMousePositionX = event.offsetX;
        oldMousePositionY = event.offsetY;
        // console.log(oldMousePositionX, oldMousePositionY);
    });

    elementScene.on('mousemove', function (event) {
        currentMousePositionX = event.offsetX;
        currentMousePositionY = event.offsetY;
        // console.log(currentMousePositionX, currentMousePositionY);

        mouseMoveX = currentMousePositionX - oldMousePositionX;
        mouseMoveY = currentMousePositionY - oldMousePositionY;
        // console.log(mouseMoveX, mouseMoveY);

        elementList
            .each(function() {
                $(this).css('left', $(this).data('x')+mouseMoveX*$(this).data('speed'))
            })
            .each(function() {
                $(this).css('top', $(this).data('y')+mouseMoveY*$(this).data('speed'))
            });
    });

    // Punkt 6 - ??

});
