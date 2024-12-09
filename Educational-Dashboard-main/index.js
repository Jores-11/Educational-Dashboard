// Adding smooth transitions to cards on hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Adding an interactive progress bar animation
const progressBar = document.querySelector('.progress');
const progressPercentage = 75; // You can dynamically change this value
let currentProgress = 0;
const progressInterval = setInterval(() => {
    if (currentProgress < progressPercentage) {
        currentProgress++;
        progressBar.style.width = `${currentProgress}%`;
    } else {
        clearInterval(progressInterval);
    }
}, 10); // This interval updates the progress bar smoothly

// Theme toggle functionality (light/dark mode)
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = 'Toggle Theme';
themeToggleBtn.classList.add('theme-toggle-btn');
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.sidebar').classList.toggle('dark-sidebar');
    document.querySelector('.header').classList.toggle('dark-header');
    
    // Save theme preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load theme preference from localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.sidebar').classList.add('dark-sidebar');
        document.querySelector('.header').classList.add('dark-header');
    }
});

// Smooth scroll for links in the sidebar
const navLinks = document.querySelectorAll('.sidebar nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
