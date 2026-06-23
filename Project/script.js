
document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;
    const cartCountEl = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-cart-btn');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            cartCount++;
            cartCountEl.textContent = cartCount;
            const originalText = button.textContent;
            button.textContent = 'Added ✓';
            button.disabled = true;

            setTimeout(function () {
                button.textContent = originalText;
                button.disabled = false;
            }, 800);
        });
    });
});