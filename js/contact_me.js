$(function() {

    // $("input,textarea").jqBootstrapValidation({
    //     preventSubmit: true,
    //     submitError: function($form, event, errors) {
    //         // additional error messages or events
    //     },
    //     submitSuccess: function($form, event) {
    //         event.preventDefault(); // prevent default submit behaviour
    //         // get values from FORM
    //         var name = $("input#name").val();
    //         var email = $("input#email").val();
    //         var phone = $("input#phone").val();
    //         var message = $("textarea#message").val();
    //         var firstName = name; // For Success/Failure Message
    //         // Check for white space in name for Success/Fail message
    //         if (firstName.indexOf(' ') >= 0) {
    //             firstName = name.split(' ').slice(0, -1).join(' ');
    //         }
    //         $.ajax({
    //             url: "././mail/contact_me.php",
    //             type: "POST",
    //             data: {
    //                 name: name,
    //                 phone: phone,
    //                 email: email,
    //                 message: message
    //             },
    //             cache: false,
    //             success: function() {
    //                 // Success message
    //                 $('#success').html("<div class='alert alert-success'>");
    //                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-success')
    //                     .append("<strong>Your message has been sent. </strong>");
    //                 $('#success > .alert-success')
    //                     .append('</div>');

    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //             },
    //             error: function() {
    //                 // Fail message
    //                 $('#success').html("<div class='alert alert-danger'>");
    //                 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
    //                 $('#success > .alert-danger').append('</div>');
    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //             },
    //         })
    //     },
    //     filter: function() {
    //         return $(this).is(":visible");
    //     },
    // });

    // document.getElementById("contactForm").addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     const formData = new FormData(this);
    
    //     fetch("././mail/contact_me.php", {
    //         method: "POST",
    //         body: formData
    //     })
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("success").innerText = data === "success" ? "Message Sent!" : data;
    //     });
    // });
    document.getElementById("contactForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
    
        const status = document.getElementById("success");
        if (response.ok) {
            status.innerHTML = "✅ Email sent successfully!";
            form.reset();
        } else {
            status.innerHTML = "❌ Failed to send email. Please try again!";
        }
    });
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
