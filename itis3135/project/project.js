// Price Calculator
const itemSelect = document.getElementById('itemSelect');
const addons = document.querySelectorAll('.addon');
const totalPriceEl = document.getElementById('totalPrice');

function calculatePrice() {
    let total = parseFloat(itemSelect.value) || 0;
    addons.forEach((addon) => {
        if (addon.checked) total += parseFloat(addon.value);
    });
    totalPriceEl.textContent = total.toFixed(2);
}

itemSelect.addEventListener('change', calculatePrice);
addons.forEach((addon) => addon.addEventListener('change', calculatePrice));

// Form validation and feedback
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        document.getElementById('formMsg').style.display = 'block';
        contactForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
