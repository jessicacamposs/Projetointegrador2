let Produtos = document.querySelector('.Produtos');
let body = document.querySelector('body');


addCarrinho.addEventListener('click', () => {
    body.classList.toggle('addProdutos')
})

const initApp = () => {
    fetch('produtos.json')
    the(response => response)
}
initApp();