let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('nomeAmigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    
    // Removendo os nomes da lista
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
}
