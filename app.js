
let iconeCarrinho = document.querySelector('.iconeCarrinho');
let body = document.querySelector('body');

iconeCarrinho.addEventListener('click', () => {
    body.classList.toggle('mostrar-Carrinho')
})

/*fecharCarrinho.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrinho')
})*/      

/*let listaProdutosHTML = document.querySelector('.listaProdutos');
let listaCarrinhoHTML = document.querySelector('.listaCarrinho');

let listaProdutos = [];
let carrinho = [];



const addDataHTML = () => {
    listaProdutosHTML.innerHTML = '';
    if(listaProdutos.length > 0){
        listaProdutos.forEach( produto => {
            let produtoNovo = document.createElement('div');
            produtoNovo.classList.add('item');
            produtoNovo.dataset.id = produto.id;
            produtoNovo.innerHTML = `
            <div class="card">
                            <img src="${produto.image}">
                                <div class="name"> <h2>${produto.name}</h2></div>    
                                <h2>${produto.price}</h2>
                            <div class="quantidade">
                                <span class="menos">-</span>
                                <span>1</span>
                                <span class="mais">+</span>
                            </div>
                            <h2> Frete Grátis </h2>
                            <button class="addCarrinho">
                                Comprar
                            </button> 
            </div>`;
                            listaProdutosHTML.appendChild(produtoNovo);
        } )
    }
}

listaProdutosHTML.addEventListener('click', (event) => {
    let posicaoClick = event.target;
    if(posicaoClick.classList.contains('addCarrinho')){
        let produto_id = posicaoClick.parentElement.dataset.id;
        addCarrinho(produto_id);
        console.log(carrinho);
    }
})

 const addCarrinhoHTML = () => {
    listaCarrinhoHTML.innerHTML = '';
    if(carrinho.length > 0){
        let novoCarrinho = document.createElement('div');
        novoCarrinho.classList.add('item');
        novoCarrinho.innerHTML = `
                    <div class="image">
                            <img src="imagens/latte-coffee.jpg">
                            </div>
                            <div class="name">
                                <h2> Café com Leite </h2>    
                            </div>
                            <div class="precoTotal">
                                <h2> R$: 8,99 </h2>
                            </div>
                            <div class="quantidade">
                                <span class="menos">-</span>
                                <span>1</span>
                                <span class="mais">+</span>
                            </div>
                            <h2> Frete Grátis </h2>`;
                            listaCarrinhoHTML.appendChild(novoCarrinho);
    }
}

const addCarrinho = (produto_id) => {
    let posicaoEsteProdutoCarrinho = carrinho.findIndex((value) => value.produto_id == produto_id);
    if(carrinho.length <= 0) {
        carrinho = [{
            produto_id: produto_id,
            quantidade: 1
        }]
    } else if(posicaoEsteProdutoCarrinho < 0){
        carrinho.push({
            produto_id: produto_id,
            quantidade: 1
        });
    } else {
        carrinho[posicaoEsteProdutoCarrinho].quantidade = carrinho[posicaoEsteProdutoCarrinho].quantidade + 1; 
    }
    console.log(carrinho);
    addCarrinhoHTML();
}  

const initMap = () => {
    // pegar data from json
    fetch('produtos.json')
    .then(response => response.json())
    .then(data => {
        listaProdutos = data;
        addDataHTML();
    })
}

initMap();*/