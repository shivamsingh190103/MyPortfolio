

function SendMail() {
    // Get form values
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Validate the fields
    if (params.from_name.trim() === "" || params.email_id.trim() === "" || params.message.trim() === "") {
        alert("All fields are required.");
        return false;  // Prevent further execution if fields are empty
    }

    // Send the email via EmailJS
    emailjs.send("service_1rqcilf", "template_vhi507v", params)
        .then(function(response) {
            alert("Thank you for reaching out! I will reply as soon as possible.");
            console.log("SUCCESS:", response);
        })
        .catch(function(error) {
            alert("Oops! Something went wrong. Please try again later.");
            console.error("FAILED:", error);
        });
}
