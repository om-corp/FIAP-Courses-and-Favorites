import Container from "../Main/container.js";
import Text from "../Main/text.js";
import Anchor from "../Main/anchor.js";


export default class Curso {

    static styles = {
        "TITLE": "cursos__title",
        "TEXT_CONTAINER": "cursos__text-container",
        "TEXT": "cursos__text",
        "NAV": "cursos__nav",
        "LINK": "link"
    };

    static create(title="TITULO", text="TEXTO", nav={}) {
        const curso = Container.create('div', '');
        Container.add(curso, [
            Curso.addTitle(curso, title),
            Curso.addText(curso, text),
            Curso.addNav(curso, nav)
        ])
    }



    static addTitle(curso, textDATA) {
        return curso.appendChild(
            new Text('h2', Curso.styles.TITLE, textDATA)
        );
    }

    static addText(curso, textDATA) {
        return curso.appendChild(
            new Container.create( 'div', Curso.styles.TEXT_CONTAINER, [
                textDATA.map(text => new Text( 'p', thCursois.styles.TEXT, text ))
            ])
        );
    }

    static addNav(curso, nav, target = Anchor.target.TOP) {
        return curso.appendChild(
            new Container.create( 'nav', Curso.styles.NAV, [
                nav.prev ? new Anchor( Curso.styles.LINK, nav.prev, target, "Curso Anterior" ) : "",
                nav.next ? new Anchor( Curso.styles.LINK, nav.next, target, "Próximo Curso" ) : ""
            ])
        );
    }

}