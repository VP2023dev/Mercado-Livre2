window.onload = function() {
    var slides = document.querySelector('.slides');
    var images = document.querySelectorAll('.slides img');
    var currentSlide = 0;
    var slideWidth = slides.offsetWidth;

    setInterval(function() {
        currentSlide = (currentSlide + 1) % images.length;
        slides.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
    }, 3000); // Altere o valor 3000 para ajustar a velocidade do slideshow (em milissegundos)
};
document.addEventListener('DOMContentLoaded', function() {
    const pesquisarButton = document.getElementById('pesquisar-button');
    pesquisarButton.addEventListener('click', function() {
        const termoPesquisa = document.getElementById('pesquisar-input').value;
        if (termoPesquisa.trim() !== '') {
            // Aqui você pode realizar uma ação com o termo de pesquisa, como redirecionar para uma página de resultados
            window.location.href = 'resultado-pesquisa.html?query=' + encodeURIComponent(termoPesquisa);
        }
    });
});
