// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.get.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Blog page navigation
function openBlog(blogName) {
    const blogPages = {
        'chunky-loafer': 'chunky-loafer.html',
        'samba-shoes': 'samba-shoes.html',
        'formal-shoes-1': 'formal-shoes-1.html',
        'formal-shoes-2': 'formal-shoes-2.html'
    };
    
    if (blogPages[blogName]) {
        window.open(blogPages[blogName], '_blank');
    }
}

// Animate elements on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-slide');
        }
    });
});
