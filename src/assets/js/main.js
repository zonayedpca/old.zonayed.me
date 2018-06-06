(function($) {
'use strict';
    var navBar = document.querySelector('.navbar-light');
    var navBarOffset = navBar.offsetTop;
    var body = document.querySelector('body');
    
    document.addEventListener('scroll', function() {
        if(window.scrollY >= navBarOffset) {
            navBar.classList.add('fixed-top');
            body.classList.add('mtop');
        } else {
            navBar.classList.remove('fixed-top');
            body.classList.remove('mtop');
        }
    });
    
    //Cycle Text
    var cycleTextSel = $('.intro > h1');
    
    cycleTextSel.cycleText({
        animation: 'bounceIn',
        interval: 3000
    });
    
    var scroll = new SmoothScroll('a[data-scroll="smooth"]', {
        offset: 100
    });
    
    
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).on('submit', function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

            // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            var $formMessages = $(formMessages);
            
            // Make sure that the formMessages div has the 'success' class.
            $formMessages.removeClass('alert alert-danger alert-dismissable error');
            $formMessages.addClass('alert alert-success alert-dismissable success');

            // Set the message text.
            $formMessages.text(response).append('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');

            var $fName = $('#fName'),
            $lName = $('#lName'),
            $email = $('#em'),
            $message = $('#message'),
            $btnSubmit = $('button[type="submit"]');
            
            // Clear the form.
            $fName.val('');
            $fName.attr('disabled', 'true');
            $lName.val('');
            $lName.attr('disabled', 'true');
            $email.val('');
            $email.attr('disabled', 'true');
            $message.val('');
            $message.attr('disabled', 'true');
            $btnSubmit.addClass('disabled');
            $btnSubmit.attr('area-disabled', 'true');
        })

        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $formMessages.removeClass('alert alert-success alert-dismissable success');
            $formMessages.addClass('alert alert-danger alert-dismissable error');

            // Set the message text.
            if (data.responseText !== '') {
                $formMessages.text(data.responseText).append('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');
            } else {
                $formMessages.text('Oops! An error occured and your message could not be sent.');
            }
        });

    }); 

})(jQuery);