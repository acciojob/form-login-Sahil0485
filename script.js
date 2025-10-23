function getFormvalue(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Access the form values using document.forms
    const firstName = document.forms['form1']['fname'].value.trim();
    const lastName = document.forms['form1']['lname'].value.trim();

    // Handle empty fields (if either first or last name is empty)
    if (!firstName || !lastName) {
        alert("Please fill in both fields.");
        return;
    }

    // Concatenate first and last name, handling extra spaces
    const fullName = firstName + " " + lastName;

    // Display the full name in an alert box
    alert(fullName);
}
