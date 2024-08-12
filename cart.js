let tittle = document.querySelector('.Produtos');
let body = document.querySelector('body');
let produtosHtml = document.querySelector('.listProduct');

let listaProdutos = [];

tittle.addEventListener('click', () => {
    body.classList.toggle('addProdutos')
})

const initApp = () => {
    fetch('produtos.json')
    the(response => response.json())
    then(data => {
        listaProdutos = data;
        console.log(listaProdutos);
    })
}
initApp();