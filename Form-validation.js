document.addEventListener("DOMContentLoaded", function () {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  let form = document.getElementById("myForm");
  let formInput = document.getElementsByClassName('form-input')
  let errorMessage = document.querySelector(".Error-message");
  let resetButton = document.getElementById('reset-button')
  let isValid = true;


  // Function to validate username length
function validateUsername() {
      if (username.value.length < 4 || username.value.length > 8) {
        document.getElementById('username-error').textContent = "Make the username between 4-8 characters"
        document.getElementById('username-error').style.color = "red"
        isValid = false;  
        username.style.border = "2px solid red";
      } else {
        document.getElementById('username-error').textContent = "Valid Username";
        document.getElementById('username-error').style.color = "green"
        isValid = true;
        username.style.border = "2px solid green";
      }
  }
  


  // Function to validate email format
function validateEmail() {
      if (!email.value.includes("@") || email.value.trim() === "") {
        document.getElementById('email-error').textContent = `Enter a valid Email`
        document.getElementById('email-error').style.color = "red"
        isValid = false;  
        email.style.border = "2px solid red";
      } else {
        document.getElementById('email-error').textContent = "Valid Email";
        document.getElementById('email-error').style.color = "green"
        isValid = true;
        email.style.border = "2px solid green";
      }
  }

resetButton.addEventListener("click", () => {
  formInput.textContent = "";
})

  function blockData() {
    const blockUsername = ["Nazi", "Hitler", "Stalin" , "Fuck", "Nigga"]
    const username = document.getElementById("username");
    const error = document.getElementById('username-error')
 
    username.addEventListener("input", () => {
        let inputValue = username.value.toLowerCase();
        let hasBlockedWord = blockUsername.some(word => inputValue.includes(word));

        if (hasBlockedWord) {
            error.textContent = "Your input contains a blocked word. Please remove it.";
            username.style.border = "2px solid red";
        } else {
            error.textContent = "";
            username.style.border = "2px solid green";
        }
    });
}

blockData();

  // Function to check if password is empty
function validatePassword() {
  let error = document.getElementById('password-error');   
  let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_%^*()+=])[A-Za-z\d@$!%*?&#_%^*()+=]{8,}$/;
  let passwordValue = password.value;
  
  if (password.value.trim() === "" || password.value.length < 8) {
        document.getElementById('password-error').textContent = `Password should not be empty or less than 8 characters`
        document.getElementById('password-error').style.color = "red"
        isValid = false;
        password.style.border = "2px solid red";
      } else {
        document.getElementById('password-error').textContent = "Valid Password";
        document.getElementById('password-error').style.color = "green"
        isValid = true;
        password.style.border = "2px solid green";
      }

  if (!strongPasswordRegex.test(passwordValue)) {
    error.textContent = "Password must contain: 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    error.style.color = "red";
    password.style.border = "2px solid red";
    return false;
  } else {
    error.textContent = "Strong Password ✅";
    error.style.color = "green";
    password.style.border = "2px solid green";
    return true;
  }
  }
  
// Add password visibility toggle functionality
function addPasswordToggle(inputId) {
  // Get the password input element
  const passwordInput = document.getElementById(inputId);
  
  // Create the eye icon element
  const toggleIcon = document.createElement("span");
  toggleIcon.innerHTML = "👁️";
  toggleIcon.className = "password-toggle-icon";
  toggleIcon.title = "Show/Hide Password";
  
  // Style the eye icon
  toggleIcon.style.position = "absolute";
  toggleIcon.style.right = "10px";
  toggleIcon.style.top = "50%";
  toggleIcon.style.transform = "translateY(-50%)";
  toggleIcon.style.cursor = "pointer";
  toggleIcon.style.userSelect = "none";
  
  // Create a wrapper to position the icon correctly
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.width = "100%";
  
  // Insert the wrapper before the password input in the DOM
  passwordInput.parentNode.insertBefore(wrapper, passwordInput);
  
  // Move the password input into the wrapper
  wrapper.appendChild(passwordInput);
  
  // Add the toggle icon to the wrapper
  wrapper.appendChild(toggleIcon);
  
  // Add click event to toggle password visibility
  toggleIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.innerHTML = "🔒"; // Change to locked icon when password is visible
    } else {
      passwordInput.type = "password";
      toggleIcon.innerHTML = "👁️"; // Change back to eye when password is hidden
    }
  });
}

// Initialize toggle functionality for both password fields
document.addEventListener("DOMContentLoaded", function() {
  // Add the toggle to both password and confirm password fields
  addPasswordToggle("password");
  addPasswordToggle("confirm-password");
});




function secondPasswordConfirmation() {
    let error = document.getElementById('confirm-password-error');  
    if ( password.value !== confirmPassword.value ) {
        error.textContent = `The password does not match`
        error.style.color = "red"
        confirmPassword.style.border = "2px solid red"
        return false     
    } else{
        error.style.color = "green"        
        error.textContent = "Password Confirmed"
        isValid = true; 
        confirmPassword.style.border = "2px solid green"         
    }
  }

  // Add real-time validation event listeners
  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", secondPasswordConfirmation)
  // Form submission validation
  form.addEventListener("submit", function (event) {
    let isSubmitting = false; 
     validateUsername();
      validateEmail();
      validatePassword();
      secondPasswordConfirmation() 
    
    if (
          username.style.border === "2px solid red" ||
          email.style.border === "2px solid red" ||
          password.style.border === "2px solid red" ||
          confirmPassword.style.border === "2px solid red"
      ) {
        
          isValid = false;
          event.preventDefault(); // Prevent submission if there are errors
      }
      if (isSubmitting) {
        alert("Form is already being submitted, please wait...");
        return;
      }
  
      if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        isSubmitting = true; // Set flag to true
        submitButton.disabled = true; // Disable button to prevent multiple clicks
        alert("Form submitted successfully!");
        
        setTimeout(() => {
          isSubmitting = false; // Reset flag
          submitButton.disabled = false; // Re-enable button
        }, 5000);
        
        // Simulate form submission (Replace this with actual submission logic)
        setTimeout(() => form.submit(), 1000); 
      }
    });
  });


