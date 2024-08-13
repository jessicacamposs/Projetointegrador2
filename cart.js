let listaProdutosHTML = document.querySelector('.listaProdutos');

let listaProdutos = [];

const initMap = () => {
    // pegar data from json
    fetch('produtos.js')
    .then(response => response.json())
    .then(data => {
        listaProdutos = data;
        console.log(listaProdutos);
    })
}

initMap();