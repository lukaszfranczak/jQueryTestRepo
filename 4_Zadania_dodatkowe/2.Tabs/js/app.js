$(document).ready(function () {
   // console.log('test');

   var elementListLi = $('li');
   var elementListDiv = $('.tabs').find('div');
   // console.log(elementListLi, elementListDiv);

    elementListLi.on('click', function() {
        // console.log('test');
        var clickedElementIndex = $(this).index();
        elementListDiv.hide();
        elementListDiv.eq(clickedElementIndex).fadeToggle();
    })

});

// Przy drugim kliknieciu na ten sam div powinien sie on schowa - obecnie znowu sie wyswietla od poczatku
