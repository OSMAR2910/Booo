// Carga
window.onload = () => {
    const loader = document.getElementById('loader');
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
};

// Verificar si es un dispositivo táctil
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (!isTouchDevice()) {
    const cursorEl = document.querySelector('.js-cursor');
    const classes = {
        clicked: 'is-clicked',
        hidden: 'is-hidden',
        linkHovered: 'is-link-hovered',
        customCursor: 'has-custom-cursor'
    };

    const onMouseMove = (e) => {
        cursorEl.style.setProperty('--cursor-x', `${e.clientX}px`);
        cursorEl.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const toggleClass = (className, add) => {
        cursorEl.classList[add ? 'add' : 'remove'](className);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach(el => {
            el.addEventListener('mouseover', () => toggleClass(classes.linkHovered, true));
            el.addEventListener('mouseout', () => toggleClass(classes.linkHovered, false));
        });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', () => toggleClass(classes.clicked, true));
    document.addEventListener('mouseup', () => toggleClass(classes.clicked, false));
    document.addEventListener('mouseenter', () => toggleClass(classes.hidden, false));
    document.addEventListener('mouseleave', () => toggleClass(classes.hidden, true));

    handleLinkHoverEvents();
    document.body.classList.add(classes.customCursor);
}
//ocutar home
function btn_view() {
    const home = document.getElementById("home");
    home.classList.add("ocultar");
}    

// Cambiar secciones navigation
document.getElementById('pag1').classList.add('agregar_dis');
const sections = {
    proyectos: document.getElementById('pag1'),
    skills: document.getElementById('pag2'),
    responsivo: document.getElementById('pag3'),
    info: document.getElementById('pag4')
};

const toggleSection = (activeSection) => {
    Object.entries(sections).forEach(([key, section]) => {
        section.classList.toggle('agregar_dis', key === activeSection);
        const audio = document.getElementById('audio');
        audio.pause();
        audio.volume = .3;
        audio.play();
    });
};

const btnnav_proyectos = () => toggleSection('proyectos');
const btnnav_skills = () => toggleSection('skills');
const btnnav_responsive = () => toggleSection('responsivo');
const btnnav_info = () => toggleSection('info');

