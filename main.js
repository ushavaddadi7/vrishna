// Simple Cart Logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

function addToCart() {
    cartCount++;
    cartDisplay.innerText = cartCount;
    showToast("Added to your bag!");
}

// Search Toggle
const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = prompt("What are you looking for today?");
        if (query) alert("Searching for: " + query);
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: #222; color: #fff; padding: 12px 25px; border-radius: 30px;
        z-index: 2000; transition: 0.5s; font-size: 0.9rem;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 3000);
}

// Parallax Effect on Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;
    const offset = window.pageYOffset;
    hero.style.transform = `translateY(${offset * 0.4}px)`;
});
