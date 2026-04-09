// Numer indeksu: PL77458

const themeBtn = document.getElementById('themeBtn');
const themeStyle = document.getElementById('theme-style');

themeBtn.addEventListener('click', function() {
    if (themeStyle.getAttribute('href') === 'red.css') {
        themeStyle.setAttribute('href', 'green.css');
    } else {
        themeStyle.setAttribute('href', 'red.css');
    }
});

const sectionBtn = document.getElementById('sectionBtn');
const sectionToToggle = document.getElementById('toggle-section');

sectionBtn.addEventListener('click', function() {
    if (sectionToToggle.style.display === 'none') {
        sectionToToggle.style.display = 'block';
    } else {
        sectionToToggle.style.display = 'none';
    }
});
