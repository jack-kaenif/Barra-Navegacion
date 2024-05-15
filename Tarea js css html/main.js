const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEeventListener('click', () => {
    navLinks.classList.toggle('active');
});