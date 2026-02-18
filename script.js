const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

// Abre/Fecha o menu ao clicar no hamburguer
menu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Animação básica do ícone (opcional)
    menu.classList.toggle('is-active');
});

// Fecha o menu ao clicar em qualquer link (bom para experiência do usuário)
document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});