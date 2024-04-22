import Curso from "./curso.js";

function obterDadosDoJSON(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON');
            return response.json();
        })
        .catch(error => console.error('Erro:', error));
}

const sections = [
    document.getElementById('curso-adm'),
    document.getElementById('curso-ads'),
    document.getElementById('curso-bd'),
    document.getElementById('curso-engComp'),
    document.getElementById('curso-engMec'),
    document.getElementById('curso-engProd'),
    document.getElementById('curso-gestTecInf'),
    document.getElementById('curso-jogos'),
    document.getElementById('curso-redeComp'),
    document.getElementById('curso-sistInf'),
    document.getElementById('curso-sistNet')
];

obterDadosDoJSON('/Components/base/cursos.json')
    .then(data => {

        sections.map((sect, i) => {
            if (sect) {
                sect.appendChild(
                    Curso.create(
                        data[i].title,
                        data[i].text,
                        data[i].nav
                    )
                )

            }
        })

    })
    .catch(error => console.error("ERRO: " + error));

