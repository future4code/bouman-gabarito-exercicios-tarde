class Post {
    constructor(titulo, autor, conteudo, urlDaImagem) {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
        this.urlDaImagem = urlDaImagem;
    }

    renderizaPost() {
        const postRenderizado = "<div><p>Titulo: " + this.titulo + "</p>" +
            "<p>Autor: " + this.autor + "</p>" +
            "<p>Conteúdo: " + this.conteudo + "</p>" +
            "<img src=" + this.urlDaImagem + ">" +
            "</div><hr>"
        return postRenderizado;
    }
}

let todosOsPosts = [];

function limpaCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("conteudo-post").value = "";
}

function criarPost() {
    // Captura dados dos inputs
    document.getElementById("image").value = "https://picsum.photos/200/200"
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const conteudo = document.getElementById("conteudo-post").value;
    const imagem = document.getElementById("image").value;

    // Cria instância
    const novoPost = new Post(titulo, autor, conteudo, imagem);
    // https://picsum.photos/200/200
    // Guarda instância no array
    todosOsPosts.push(novoPost);

    // Armazena no LocalStorage todos os posts após inserir o recém criado

    console.log("Todos os posts: ", todosOsPosts);
    limpaCampos();

    renderizaTodosOsPosts();
}

function renderizaTodosOsPosts() {
    const areaDosPosts = document.getElementById("posts");

    // Limpa area dos Posts para evitar duplicação
    areaDosPosts.innerHTML = "";

    // Adiciona todos os posts na área de posts
    for (let post of todosOsPosts) {
        // ESTOU GARANTINDO QUE O OBJETO SEJA UM INSTANCIA DA CLASSE POST
        // QUANDO ELE E BUSCADO DO LOCALSTORAGE ELE PERDE A CLASSE.
        const postComoInstancia = new Post(post.titulo, post.autor, post.conteudo, post.urlDaImagem);
        areaDosPosts.innerHTML += postComoInstancia.renderizaPost();
    }
}

function recuperaPostsDoLocalStorage() {
    renderizaTodosOsPosts();
}

// Assim que a janela do navegador carregar, buscar itens do LocalStorage
window.onload = recuperaPostsDoLocalStorage;