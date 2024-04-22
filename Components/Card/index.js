import Card from './card.js';

function obterDadosDoJSON(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON');
            return response.json();
        })
        .catch(error => console.error('Erro:', error));
}

const cursosSection = document.body.querySelector('.card-section--cursos');
console.log(cursosSection);

if (cursosSection) {
    obterDadosDoJSON('/Components/base/cursos.json')
    .then(data => {
        data.map(
            materia => cursosSection.appendChild(
                Card.create(
                    materia.title, 
                    materia.desc, 
                    materia.url, 
                    materia.img
                )
            )
        )
    })
    .catch(error => console.error("ERRO: " + error));
}

const favoritesSection = document.body.querySelector('.card-section--favorites');
if (favoritesSection) {
    obterDadosDoJSON('/Components/base/favoritos.json')
    .then(data => {
        data.map(
            (favorito) => {
                let i = 0;
                favoritesSection.appendChild(
                    Card.create(
                        favorito.sites[i].imgAlt,
                        favorito.integrante,
                        favorito.sites[i].href,
                        {
                            "src": favorito.sites[i].imgSrc,
                            "alt": favorito.sites[i].altSrc
                        },
                        '_blank'
                    )
                )
                i++;
                favoritesSection.appendChild(
                    Card.create(
                        favorito.sites[i].imgAlt,
                        favorito.integrante,
                        favorito.sites[i].href,
                        {
                            "src": favorito.sites[i].imgSrc,
                            "alt": favorito.sites[i].altSrc
                        },
                        '_blank'
                    )
                )
            }
        )
    })
}