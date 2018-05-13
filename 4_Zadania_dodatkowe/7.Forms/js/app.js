$(document).ready(function () {

    var elementForm = $('form');

    var elementName = $('#nameInput');
    var elementEmail = $('#emailInput');
    var elementMessage = $('#messageInput');

    var elementError = $('.error');

    elementForm.on('submit', function (event) {
        var name = elementName.val();
        var email = elementEmail.val();
        var message = elementMessage.val();

        // Data check - name

        if (name.length<=5) {
            event.preventDefault();
            return elementError.text('Name must consist of 6 letters or more');
        }

        // Data check - email

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            event.preventDefault();
            return elementError.text('Email has to include @ and . sign');
        }

        // Data check - message

        if (message.length<=10) {
            event.preventDefault();
            return elementError.text('Message must be longer than 10 letters');
        }

    })

});