//custom-figma.js
document.addEventListener("DOMContentLoaded", function () {
  // Color selection
  const colorButtons = document.querySelectorAll('.color-option');
  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      colorButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Size selection
  const sizeButtons = document.querySelectorAll('.size-option');
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Popup logic (فتح وغلق)
  const popup = document.getElementById("product-popup");
  const popupImage = document.getElementById("popup-product-image");
  const popupTitle = document.getElementById("popup-product-title");
  const popupPrice = document.getElementById("popup-product-price");
  const popupDescription = document.getElementById("popup-product-description");
  const closeBtn = document.querySelector(".popup-close");
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  document.querySelectorAll(".product-popup-trigger").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productItem = btn.closest(".product-item");
      popupImage.src = productItem.dataset.productImage;
      popupTitle.textContent = productItem.dataset.productTitle;
      popupPrice.textContent = productItem.dataset.productPrice;
      popupDescription.textContent = productItem.dataset.productDescription;

      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  addToCartBtn.addEventListener("click", function () {
    const selectedColor = document.querySelector('.color-option.active')?.dataset.color;
    const selectedSize = document.querySelector('.size-option.active')?.dataset.size;

    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    alert(`Added to cart: ${popupTitle.textContent} | Color: ${selectedColor} | Size: ${selectedSize}`);
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });
});


