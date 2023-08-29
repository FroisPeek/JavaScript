const catalogo = [
    {
    id: 1,
    nome: "Casaco Branco",
    marca: "Zara",
    preco: 700,
    imagem: "product-1.jpg",
    feminino: false,
}, 
{
    id: 2,
    nome: "Sobretudo Preto",
    marca: "Zara",
    preco: 1100,
    imagem: "product-2.jpg",
    feminino: true,
},
{
    id: 3,
    nome: "Jaqueta com Efeito Camurça",
    marca: "Zara",
    preco: 850,
    imagem: "product-3.jpg",
    feminino: false,
}, 
{
    id: 4,
    nome: "Sobretudo em Mescla de Lã",
    marca: "Zara",
    preco: 1600,
    imagem: "product-4.jpg",
    feminino: false,
},
{
    id: 5,
    nome: "Camisa Acolchoada de Veludo",
    marca: "Zara",
    preco: 1100,
    imagem: "product-5.jpg",
    feminino: false,
}
];

for(const produtoCatalogo of catalogo){

    const cartaoProduto = `<div id="card-produto 1"> 
    <img 
    src="./assets/img/${produtoCatalogo.imagem}" 
    alt="Produto 1 do Vite Projecty"
    style= "height: 200px"
    />
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>R$${produtoCatalogo.preco}</p>
    <button>Adicionar ao carrinho</button>
  </div>`;
document.getElementById("container-produto").innerHTML += cartaoProduto;

};