import { Cabecalho } from "../Cabecalho/cabecalho.js";

const paginas = [
    {
        "url": "/index.html",
        "nome": "Página Inicial",
        "cabecalho_id": "cabecalho--principal"
    },
    {
        "url": "/pages/cursos.html",
        "nome": "Cursos",
        "cabecalho_id": "cabecalho--cursos"
    },
    {
        "url": "/pages/favoritos.html",
        "nome": "Favoritos",
        "cabecalho_id": "cabecalho--favoritos"
    },
    {
        "url": "/pages/equipe.html",
        "nome": "Equipe",
        "cabecalho_id": "cabecalho--equipe"
    }
]

const links = paginas.map(pagina => {return {href: pagina.url, content: pagina.nome, target: "_self"}});
const image = {"src": "/img/fiap.png", "alt": "FIAP"};

for (let i = 0; i < paginas.length; i++) {
    const header = document.getElementById(paginas[i].cabecalho_id);
    if (header) new Cabecalho().create(header, paginas[i].nome, links);
}
