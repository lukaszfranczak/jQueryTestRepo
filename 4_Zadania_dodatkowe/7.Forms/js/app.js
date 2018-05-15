$(document).ready(function () {

    var $error = $('.error');

    $('form').on('submit', function (event) {
        var name = $('#nameInput').val();
        var email = $('#emailInput').val();
        var message = $('#messageInput').val();

        // Data check - name

        if (name.length<=5) {
            event.preventDefault();
            return $error.text('Name must consist of 6 letters or more');
        }

        // Data check - email

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            event.preventDefault();
            return $error.text('Email has to include @ and . sign');
        }

        // Data check - message

        if (message.length<=10) {
            event.preventDefault();
            return $error.text('Message must be longer than 10 letters');
        }

    })

});