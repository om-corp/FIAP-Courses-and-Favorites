import { Curso, devLog } from "./curso.js";

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

fetch("../../../Components/base/cursos.json", {method: "GET"})
    .then((_response) => _response.json())
    .then((_data) => {
        _data.map((curso: any) => {
            // devLog(curso);
            const section = document.getElementById(curso.idPage);
            if (section) {
                const element = new Curso().create(curso.title, curso.text, curso.nav);
                if (element) section.appendChild(element);
            }
        })
        
    })
    .catch((error) => console.error(error));
