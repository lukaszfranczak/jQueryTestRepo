
$(document).ready(function () {

    // Zadanie z wykladowca - NIE DZIAŁA

    // var newDiv = $('<div>', {class: 'panel'});
    // // console.log(newDiv);
    // $('.people').after(newDiv);
    //
    // newDiv.on('click', function() {
    //     console.log('test');
    // });
    //
    // newDiv.on('click', function() {
    //     newDiv.append('<p></p>');
    // })

    // Zadanie 1 - moje

    var liEditButton = $('<button>Edit</button>', {class: 'edit'});
    var liDeleteButton = $('<button>Delete</button>', {class: 'delete'});

    var liElementList = $('.people').find('li');

    liElementList.append(liEditButton, liDeleteButton);

    $('.main').on('click', '.delete', function() {
        $(this).parent().remove();
    })



    // Zadanie 1 - z wykladowca


    // $('input[type=submit]').on('click',function(){
    //     var edit = $('<button>',{class:'edit'});
    //     edit.text('Edytuj');
    //     var del = $('<button>',{class:'delete'});
    //     del.text('Usuń');
    //
    //     var name = $('#addUser').val();
    //     var age = $('#age').val();
    //     var newperson = $('<li>',{'data-age':age});
    //     var span = $('<span>');
    //     span.text(name);
    //     newperson.append(span);
    //     newperson.append(edit,del)
    //     var color = setColor(age);
    //     newperson.css('color', color);
    //
    //     $('.main').append(newperson);
    //
    // });
    //
    // $('.people').after($('<div>',{class:'panel'}));
    //
    // var edit = $('<button>',{class:'edit'});
    // edit.text('Edytuj');
    //
    // var del = $('<button>',{class:'delete'});
    // del.text('Usuń');
    // $('li').append(edit,del);
    //
    // $(".main").on('click', '.delete', function() {
    //     $(this).parent().remove();
    // });
    //
    // $(".main").on('click', '.edit', function() {
    //
    //     if($(this).hasClass('edited')){
    //         $(this).removeClass('edited')
    //         $(this).text('Edytuj');
    //         $(this).parent().find('span').attr('contenteditable',false);
    //     }else{
    //         $(this).addClass('edited')
    //         $(this).text('Zatwierdź');
    //         $(this).parent().find('span').attr('contenteditable',true);
    //
    //     }
    //
    //
    // });



});