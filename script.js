const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const images = document.querySelectorAll('.gallery img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // توقف عن مراقبة الصورة بعد ظهورها
        }
    });
}, {
    threshold: 0.1 // متى يجب أن يبدأ التأثير (10%)
});

images.forEach(img => {
    img.classList.add('hidden'); // إضافة الفئة المخفية
    observer.observe(img);
});
