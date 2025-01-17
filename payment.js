function subscribe() {
    let email = prompt("Enter your email to subscribe:");
    if(email) {
        alert("Thank you for subscribing, " + email);
    } else {
        alert("Subscription cancelled.");
    }
}