let products = [];

    function renderTable() {
      const table = document.getElementById("productTable");
      table.innerHTML = "<tr><th>Code</th><th>Name</th><th>Quantity</th><th>Price</th><th>Action</th></tr>";

      products.forEach(product => {
        const row = table.insertRow();
        row.insertCell(0).textContent = product.code;
        row.insertCell(1).textContent = product.name;
        row.insertCell(2).textContent = product.quantity;
        row.insertCell(3).textContent = product.price;

        const editCell = row.insertCell(4);
        editCell.innerHTML = `<button onclick="editProduct('${product.code}')" class="btn btn-primary mr-5">Edit</button> 
                              <button onclick="deleteProduct('${product.code}')" class="btn btn-danger">Delete</button>`;
      });
    }

    function saveProduct() {
      const code = document.getElementById("code").value;
      const name = document.getElementById("name").value;
      const quantity = document.getElementById("quantity").value;
      const price = document.getElementById("price").value;

      const existingProductIndex = products.findIndex(product => product.code === code);

      if (existingProductIndex !== -1) {
        // Update existing product
        products[existingProductIndex] = { code, name, quantity, price };
      } else {
        // Add new product
        products.push({ code, name, quantity, price });
      }

      // Clear form fields
      document.getElementById("productForm").reset();

      // Render updated table
      renderTable();
    }

    function editProduct(code) {
      const productToEdit = products.find(product => product.code === code);
      if (productToEdit) {
        document.getElementById("code").value = productToEdit.code;
        document.getElementById("name").value = productToEdit.name;
        document.getElementById("quantity").value = productToEdit.quantity;
        document.getElementById("price").value = productToEdit.price;
      }
    }

    function deleteProduct(code) {
      products = products.filter(product => product.code !== code);
      renderTable();
    }

    // Initial rendering
    renderTable();