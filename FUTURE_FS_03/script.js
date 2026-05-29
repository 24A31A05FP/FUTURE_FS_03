const menuItem = document.getElementById("menuItem");
const quantity = document.getElementById("itemCount");
const totalAmount = document.getElementById("totalAmount");

const orderForm = document.getElementById("orderForm");
const orderHistory = document.getElementById("orderHistory");

// Auto calculate total amount
function calculateTotal() {

  let price = Number(menuItem.value);

  let qty = Number(quantity.value);

  if (price > 0 && qty > 0) {

    let total = price * qty;

    totalAmount.value = "₹" + total;

  } else {

    totalAmount.value = "";

  }
}

// Run when menu item changes
menuItem.addEventListener("change", calculateTotal);

// Run when quantity changes
quantity.addEventListener("input", calculateTotal);

// Submit Order
orderForm.addEventListener("submit", function(event) {

  event.preventDefault();

  // Get values
  const customerName =
    document.getElementById("customerName").value;

  const customerEmail =
    document.getElementById("customerEmail").value;

  const customerPhone = 
    document.getElementById("customerPhone").value;

  const selectedText =
    menuItem.options[menuItem.selectedIndex].text;

  const qty =
    quantity.value;

  const total =
    totalAmount.value;

  // Create history item
  const historyItem =
    document.createElement("div");

  historyItem.classList.add("history-item");

  historyItem.innerHTML = `
    <h4>✅ Your order is submitted successfully!</h4>

    <p><strong>Name:</strong> ${customerName}</p>

    <p><strong>Email:</strong> ${customerEmail}</p>

    <p><strong>Email:</strong> ${customerPhone}</p>

    <p><strong>Item:</strong> ${selectedText}</p>

    <p><strong>Quantity:</strong> ${qty}</p>

    <p><strong>Total:</strong> ${total}</p>

    <button class="cancel-history-btn">
      Cancel Order
    </button>
  `;

  // Add history item
  orderHistory.prepend(historyItem);

  // Cancel Order from history
  const cancelBtn =
    historyItem.querySelector(".cancel-history-btn");

  cancelBtn.addEventListener("click", function() {

    alert("❌ Your order is cancelled successfully!");

    historyItem.remove();

  });

  // Reset form
  orderForm.reset();

  totalAmount.value = "";

});