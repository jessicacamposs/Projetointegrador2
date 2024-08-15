let iconeCarrinho = document.querySelector('.icone-carrinho');
let body = document.querySelector(body);

iconeCarrinho.addEventListener('click', () => {
    body.classList.toggle('mostrar-Carrinho')
})