function dashboard2024AnimateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for triggering animations
const dashboard2024Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            card.style.animation = 'dashboard2024_pulse 2s ease';
            
            const countElement = card.querySelector('.dashboard2024_number');
            if (countElement) {
                const targetValue = parseInt(countElement.getAttribute('data-dashboard-count'));
                dashboard2024AnimateValue(countElement, 0, targetValue, 2000);
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all stat cards
document.querySelectorAll('.dashboard2024_card').forEach(card => {
    dashboard2024Observer.observe(card);
});