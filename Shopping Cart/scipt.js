const decreaseBtn = document.querySelector(".counter:nth-child(1)");
const increaseBtn = document.querySelector(".counter:nth-child(3)");
const numberBtn = document.querySelector(".number");
const checkoutBtn = document.querySelector("button.rounded-5");
const messageContainer = document.querySelector(".message");
const totalPriceElement = document.getElementById("totalPrice");

// Initialize the count value and item price (per item)
let count = 1;
const itemPrice = 4395; // Price per unit in NOK

// Function to update the displayed count and total price
function updateNumber() {
  numberBtn.innerHTML = count;
  updateTotalPrice();
}

// Function to update the total price based on the quantity
function updateTotalPrice() {
  const total = count * itemPrice;
  totalPriceElement.innerHTML = `${total},-`;
}

// Add event listener to the "-" button
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateNumber();
  }
});

// Add event listener to the "+" button
increaseBtn.addEventListener("click", () => {
  count++;
  updateNumber();
});

// Add event listener to the "Checkout" button
checkoutBtn.addEventListener("click", () => {
  messageContainer.innerHTML = `<p>Thank you for your purchase! You have selected ${count} item(s).</p>`;

  // Remove the message after 2 second (1000 ms)
  setTimeout(() => {
    messageContainer.innerHTML = "";
  }, 2000);
});
