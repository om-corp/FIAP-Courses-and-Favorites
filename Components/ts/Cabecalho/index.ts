import { Cabecalho } from "../Cabecalho/cabecalho.js";
import { devLog } from "../developer-mode.js";

const paginas = [
    {
        "url": "/index.html",
        "nome": "Página Inicial",
        "cabecalho_id": "cabecalho--principal"
    },
    {
        "url": "/cursos.html",
        "nome": "Cursos",
        "cabecalho_id": "cabecalho--cursos"
    },
    {
        "url": "/fav.html",
        "nome": "Favoritos",
        "cabecalho_id": "cabecalho--favoritos"
    },
    {
        "url": "/integrantes.txt",
        "nome": "Equipe",
        "cabecalho_id": "cabecalho--equipe"
    }
]

const links = paginas.map(pagina => {return {"href": pagina.url, "text": pagina.nome}});
const image = {"src": "../../../img/fiap.png", "alt": "FIAP"};

for (let i = 0; i < paginas.length; i++) {
    const header = document.getElementById(paginas[i].cabecalho_id);
    if (header) new Cabecalho().create(header, paginas[i].nome, links, image);
    devLog(`HEADER: ${header?.innerHTML}`)
}
