document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    //validate
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    //email format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    //log to consol
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    document.getElementById("successMessage").textContent = "Thank you for contacting us! We'll have a consultant respond to you shortly";
    
    //clear form
    document.getElementById("contact-form").reset();
});