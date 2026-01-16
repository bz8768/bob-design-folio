/**
 * Bob's Design Folio - Shared JavaScript
 */

// Page Load Animations
document.addEventListener('DOMContentLoaded', () => {
    // Staggered entrance animations for showcase cards
    const cards = document.querySelectorAll('.showcase-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back button handling for showcase pages
function goBack() {
    if (document.referrer.includes(window.location.origin)) {
        history.back();
    } else {
        window.location.href = '../../index.html';
    }
}
