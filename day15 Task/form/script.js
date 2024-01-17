function submitForm() {
    // Get form values
    const formData = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      food: Array.from(document.getElementById('food').selectedOptions).map(option => option.text),
      address: document.getElementById('address').value,
      pincode: document.getElementById('pincode').value,
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
    };

    // Append form values to the table
    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = tableBody.insertRow(tableBody.rows.length);
    Object.values(formData).forEach(value => {
      const cell = newRow.insertCell();
      cell.appendChild(document.createTextNode(value));
    });

    // Clear the form
    document.getElementById('form').reset();
  }