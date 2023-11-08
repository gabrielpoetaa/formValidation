function sendEmail(){
    Email.send({
        SecureToken:'d1d1f1b6-03a5-4a66-aeb4-65115c61f33d',
        To: 'portogapoeta@gmail.com',
        From: "portogapoeta@gmail.com",
        Subject: "New contact form enquiry",
        Body: "Name:" + document.getElementById("name").value
        + "<br> Email:" + document.getElementById("email").value
        + "<br> Phone:" + document.getElementById("phone").value
        + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}