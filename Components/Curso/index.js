import Text from "../Main/text.js";
import Curso from "./curso.js";

function obterDadosDoJSON(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON');
            return response.json();
        })
        .catch(error => console.error('Erro:', error));
}

const ID = {
    "ADM": "curso-adm",
    "ADS": "curso-ads",
    "BD": "curso-bd",
    "ENG_COMP": "curso-engComp",
    "ENG_MEC": "curso-engMec",
    "ENG_PROD": "curso-engProd",
    "GEST_TEC_INF": "curso-gestTecInf",
    "JOGOS": "curso-jogos",
    "REDE_COMP": "curso-redeComp",
    "SIST_INF": "curso-sistInf",
    "SIST_NET": "curso-sistNet"
};

//TODO: COMPREENDER ERRO DE CARREGAMENTO
obterDadosDoJSON('/Components/base/cursos.json')
    .then(data => {

        let i = 0;

        for (const id in ID) {

            const pagina = document.getElementById(ID[id]);
            console.log(pagina);

            pagina.innerHTML = new Curso("", "", {"prev": "", "next": ""})

            i++;
        }

    })

