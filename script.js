const form = document.getElementById('registrationForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Additional validation logic can be added here

      // Simulate a successful registration
      setTimeout(() => {
        form.style.display = 'none';
        confirmation.style.display = 'block';
      }, 1000);
    });
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength");
  
    passwordInput.addEventListener("input", function() {
      const password = passwordInput.value;
      const strength = checkPasswordStrength(password);
  
      if (strength === "weak") {
        passwordStrength.textContent = "Password is weak";
        passwordStrength.classList.add("error");
      } else {
        passwordStrength.textContent = "";
        passwordStrength.classList.remove("error");
        confirmationMessage.style.display = "block";
      }
    });
  
    function checkPasswordStrength(password) {
      // You can define your criteria for password strength here
      
      if (password.length < 8) {
        return "weak";
      }
      // You can add more conditions for a stronger password
      return "strong";
    }
  });  