import { Container, Anchor, Image, Text } from "../components.js";

const devMode = true;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

export class Curso {

    private styles = {
        "CURSO": "cursos",
        "TITLE": "cursos__title",
        "TEXT_CONTAINER": "cursos__text-container",
        "NAV": "cursos__nav",
        "LINK": "link"
    };

    create(_title: string="default title", _text: string[]=["default text"], _nav: {"prev": string, "next": string}): HTMLElement | null {
        try {
            const curso = new Container().create("div", [], this.styles.CURSO);

            const title = new Text().create( _title, "h2", this.styles.TITLE );
            const textContainer = new Container().create("div", 
                _text.map(text => new Text().create(text)), 
            this.styles.TEXT_CONTAINER);

            const nav = new Container().create("nav", [
                _nav.prev ? new Anchor().create(_nav.prev, "Curso Anterior", "_self", this.styles.LINK): null,
                _nav.next ? new Anchor().create(_nav.next, "Próximo Curso", "_self", this.styles.LINK): null
            ], this.styles.NAV)

            if (curso && title && textContainer && nav) {
                curso.appendChild(title);
                curso.appendChild(textContainer);
                curso.appendChild(nav);
            }

            return curso;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

