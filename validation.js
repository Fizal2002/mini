document.getElementById("myForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    if (nameInput.value.trim() === "") {
      alert("Name cannot be empty");
      event.preventDefault();
    }
  
    // Add more validation for email if needed
  
  });
  