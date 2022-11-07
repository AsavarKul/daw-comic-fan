const themes = document.querySelectorAll('[name="theme"]');

const guardarTheme = function (theme) {
    localStorage.setItem('theme', theme);
};

const aplicarTheme = function () {
    const activo = localStorage.getItem('theme');
    themes.forEach((opcion) => {
        opcion.id === activo ? (opcion.checked = true) : '';
    });
};

themes.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        guardarTheme(opcion.id);
    });
});

document.onload = aplicarTheme();
