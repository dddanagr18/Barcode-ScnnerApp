// app.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('entryForm');
  const tableBody = document.querySelector('#barcodeTable tbody');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const salesOrder = document.getElementById('salesOrder').value;

    // Store the date and sales order in the form data object
    const formData = {
      date: date,
      salesOrder: salesOrder
    };

    // Add event listener for barcode scanning
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') { // Assuming Enter key is used to submit barcode
        const barcode = e.target.value;

        if (barcode) {
          // Create a new row in the table
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
                        <td>${formData.date}</td>
                        <td>${formData.salesOrder}</td>
                        <td>${barcode}</td>
                    `;
          tableBody.appendChild(newRow);

          // Clear input after adding barcode
          e.target.value = '';
        }
      }
    });
  });
});
