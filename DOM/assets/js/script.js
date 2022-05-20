function mudaCor() {
    mudaClasse();
    mudaTexto();
}

function mudaClasse() {
    h1.classList.toggle(DarkMode);
    button.classList.toggle(DarkMode);
    footer.classList.toggle(DarkMode);
    body.classList.toggle(DarkMode);
}

function mudaTexto() {
    if (body.classList.contains(DarkMode)){
        h1.innerHTML = "Dark Mode ON"
        button.innerHTML = "Light Mode"
        footer.innerHTML = "Caralho maluco, fiquei DARK 🐱‍👤"
    } else {
        h1.innerHTML = "Light Mode ON"
        button.innerHTML = "Dark Mode"
        footer.innerHTML = "Hackeado pelo Light Mode"
        footer.innerHTML = "Caralho maluco, fiquei LIGHT 💡"
    }
}

const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const DarkMode = "dark-mode"

button.addEventListener('click', mudaCor );