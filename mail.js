
function sendMail() {
    var templateParams = {
        email : document.getElementById("email").value,
        sujet : document.getElementById("sujet").value,
        message : document.getElementById("message").value
    };
     
    emailjs.send('service_7ctgmtu', 'template_v3rg25e', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}