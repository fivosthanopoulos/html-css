function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const age = document.getElementById('age').value;

    if (message.length < 15) {
        alert("Το μήνυμά σας πρέπει να έχει τουλάχιστον 15 χαρακτήρες.");
        return false;
    }

   
    if (age < 18) {
        alert("Η ηλικία σας πρέπει να είναι τουλάχιστον 18.");
        return false;
    }

    return true; 
}