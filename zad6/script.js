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

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const imie = document.getElementById('imie');
        const nazwisko = document.getElementById('nazwisko');
        const email = document.getElementById('email');
        const wiadomosc = document.getElementById('wiadomosc');

        let isValid = true;

        function showError(el, errorId, msg) {
            el.classList.add('input-error');
            const errorDiv = document.getElementById(errorId);
            errorDiv.textContent = msg;
            errorDiv.style.display = 'block';
            isValid = false;
        }

        function clearError(el, errorId) {
            el.classList.remove('input-error');
            const errorDiv = document.getElementById(errorId);
            errorDiv.textContent = '';
            errorDiv.style.display = 'none';
        }

        clearError(imie, 'imieError');
        clearError(nazwisko, 'nazwiskoError');
        clearError(email, 'emailError');
        clearError(wiadomosc, 'wiadomoscError');
        document.getElementById('successMessage').style.display = 'none';

        const numbers = /\d/;

        if (!imie.value.trim()) {
            showError(imie, 'imieError', 'Pole imię jest wymagane.');
        } else if (numbers.test(imie.value)) {
            showError(imie, 'imieError', 'Imię nie może zawierać cyfr.');
        }

        if (!nazwisko.value.trim()) {
            showError(nazwisko, 'nazwiskoError', 'Pole nazwisko jest wymagane.');
        } else if (numbers.test(nazwisko.value)) {
            showError(nazwisko, 'nazwiskoError', 'Nazwisko nie może zawierać cyfr.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'emailError', 'Pole e-mail jest wymagane.');
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'emailError', 'Podaj poprawny e-mail.');
        }

        if (!wiadomosc.value.trim()) {
            showError(wiadomosc, 'wiadomoscError', 'Wiadomość nie może być pusta.');
        }

        if (isValid) {
            document.getElementById('successMessage').style.display = 'block';
            contactForm.reset();
        }
    });
}

const umiejetnosciLista = document.getElementById('umiejetnosci-lista');
const projektyLista = document.getElementById('projekty-lista');

if (umiejetnosciLista && projektyLista) {
    fetch('dane.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.umiejetnosci.forEach(function(item) {
                const li = document.createElement('li');
                li.textContent = item;
                umiejetnosciLista.appendChild(li);
            });

            data.projekty.forEach(function(item) {
                const li = document.createElement('li');
                li.textContent = item;
                projektyLista.appendChild(li);
            });
        })
        .catch(function(error) {
            console.log('Błąd podczas pobierania danych:', error);
        });
}
