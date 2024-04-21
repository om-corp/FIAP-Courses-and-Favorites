import Card from './card.js';

function obterDadosDoJSON() {
    return fetch('../Components/Card/card.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON');
            return response.json();
        })
        .catch(error => console.error('Erro:', error));
}

const section = document.body.querySelector('.section--cards');

if (section) {
    obterDadosDoJSON()
    .then(data => {
        data.map(
            materia => section.appendChild(
                Card.create(
                    materia.tit, 
                    materia.desc, 
                    materia.url, 
                    materia.img
                )
            )
        )
    })
    .catch(error => console.error("ERRO: " + error));
}