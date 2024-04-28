import { Curso } from "./curso.js";

const url = "/Components/base/cursos.json";

fetch(url, {method: "GET"})
    .then((_response) => _response.json())
    .then((_data) => {
        _data.map((curso: any) => {
            const section = document.getElementById(curso.idPage);
            
            if (section) {
                const element = new Curso().create(curso.title, curso.text, curso.nav);
                if (element) section.appendChild(element);
            }
        })
    })
    .catch((error) => console.error(error));
