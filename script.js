const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {  // Corrected to use close instead of bar
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
