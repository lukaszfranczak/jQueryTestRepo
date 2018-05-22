$(document).ready(function () {
    $('[class*=changeBar]').on('click', function () {
        $('#' + $(this).data('bar'))
            .removeClass(['blue', 'orange', 'green'])
            .addClass($(this).data('color'))
            .animate({width: $(this).data('width')});
    });
});