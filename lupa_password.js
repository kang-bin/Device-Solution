
// Logic untuk halaman lupa password
document.addEventListener("DOMContentLoaded", function () {
    
    console.log("Halaman Lupa Password: Skrip Berjalan");
});

function forgotPassword(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "password_reset_confirmation.html";
}
