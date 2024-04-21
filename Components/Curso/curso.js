const _className = {
    title: 'cursos__title',
    textContainer: 'cursos__text-container',
    text: 'cursos__text',
    nav: 'cursos__nav',
    link: 'link'
};

export default class Curso {

    static create(_title, _text, _nav) {
        const curso = document.querySelector('.cursos');

        this.addTitle(curso, _title);
        this.addText(curso, _text);
        this.addNav(curso, _nav);

        return curso;
    }

    static addTitle(curso, _title) {
        const title = document.createElement('h2');
        title.className = _className.title;
        title.innerHTML = _title;

        curso.appendChild(title);
        return null;
    }

    static addText(curso, _container) {
        const container = document.createElement('div');
        container.className = _className.textContainer;

        _container.map(_text => {

            const text = document.createElement('p');
            text.innerHTML = _text;
            container.appendChild(text);

        })

        curso.appendChild(container);
        return null;
    }

    static addNav(curso, _nav) {
        const container = document.createElement('nav');
        container.className = _className.nav;

        if (_nav.prev) {
            const prev = document.createElement('a');
            prev.className = _className.link;
            prev.href = _nav.prev;
            prev.innerHTML = "Curso Anterior";
            container.appendChild(prev)
        }

        if (_nav.next) {
            const next = document.createElement('a');
            next.className = _className.link;
            next.href = _nav.next;
            next.innerHTML = "Próximo Curso";
            container.appendChild(next)
        }

        curso.appendChild(container);
        return null;
    }

}