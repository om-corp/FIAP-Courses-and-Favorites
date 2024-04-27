import { Cabecalho } from "../Cabecalho/cabecalho.js";

const paginas = [
    {
        "url": "/index.html",
        "nome": "Página Inicial",
        "cabecalho_id": "cabecalho--principal"
    },
    {
        "url": "/src/pages/cursos.html",
        "nome": "Cursos",
        "cabecalho_id": "cabecalho--cursos"
    },
    {
        "url": "/src/pages/favoritos.html",
        "nome": "Favoritos",
        "cabecalho_id": "cabecalho--favoritos"
    },
    {
        "url": "/src/pages/equipe.html",
        "nome": "Equipe",
        "cabecalho_id": "cabecalho--equipe"
    }
]

const links = paginas.map(pagina => {
    return { href: pagina.url, content: pagina.nome, target: "_self" }
});

for (let i = 0; i < paginas.length; i++) {
    const header = document.getElementById(paginas[i].cabecalho_id);
    if (header) new Cabecalho().create(header, paginas[i].nome, links);
}
