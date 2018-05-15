$(document).ready(function () {
   var elementListDiv = $('.tabs').find('div');
    $('li').on('click', function() {
        var clickedElementIndex = $(this).index();
        elementListDiv.hide();
        elementListDiv.eq(clickedElementIndex).fadeToggle();
    })
});

// Przy drugim kliknieciu na ten sam div powinien sie on schowa - obecnie znowu sie wyswietla od poczatku
