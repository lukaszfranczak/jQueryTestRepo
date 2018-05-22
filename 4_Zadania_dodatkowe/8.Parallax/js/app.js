$(document).ready(function () {
    var oldMousePositionX = 0;
    var oldMousePositionY = 0;
    var currentMousePositionX = 0;
    var currentMousePositionY = 0;
    var mouseMoveX = 0;
    var mouseMoveY = 0;
    $('.element')
        .each(function() {
            $(this).css({
                'z-index': $(this).data('z'),
                'left': $(this).data('x'),
                'top': $(this).data('y')
            })
        });
    $('.scene').on('mouseenter', function (event) {
        oldMousePositionX = event.offsetX;
        oldMousePositionY = event.offsetY;

    });
    $('.scene').on('mousemove', function (event) {
        currentMousePositionX = event.offsetX;
        currentMousePositionY = event.offsetY;
        if ($(event.target).is($('.element'))) {
            currentMousePositionX += $(event.target).attr('left');
            currentMousePositionY += $(event.target).attr('top');
        }
        mouseMoveX = currentMousePositionX - oldMousePositionX;
        mouseMoveY = currentMousePositionY - oldMousePositionY;
        $('.element')
            .each(function() {
                $(this).css({
                    'left': $(this).data('x')+mouseMoveX*$(this).data('speed'),
                    'top': $(this).data('y')+mouseMoveY*$(this).data('speed')
                })
            });
    });
});
