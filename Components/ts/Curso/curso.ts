import { Container, Anchor, Image, Text } from "../components.js";

const devMode = false;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

export class Curso {

    styles = {
        "TITLE": "cursos__title",
        "TEXT_CONTAINER": "cursos__text-container",
        "TEXT": "cursos__text",
        "NAV": "cursos__nav",
        "LINK": "link"
    };

    create(_title: string="default title", _text: string[]=["default text"], _nav: {"prev": string, "next": string}): HTMLElement | null {
        try {
            const curso = new Container().create();

            const title = new Text().create( _title, "h2", this.styles.TITLE );
            const textContainer = new Container().create("div", _text.map(text => new Text().create(text)), this.styles.TEXT_CONTAINER);

            const nav = new Container().create("nav", [
                new Anchor().create(_nav.prev, "Curso Anterior", "_self", this.styles.LINK),
                new Anchor().create(_nav.next, "Próximo Curso", "_self", this.styles.LINK)
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

