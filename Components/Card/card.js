const _className = {
    card: 'card',
    image: 'card__image',
    textContainer: 'card__text',
    title: 'card__headline',
    text: 'card__content',
    button: 'card__button'
};

export default class Card {

    constructor() {
    }

    static create(_title, _text, _url, _image, _target) {
        const card = document.createElement('div');
        card.className = _className.card;

        if (_image) {
            this.addImg(card, _image);
        }

        this.addText(card, _title, _text)
        this.addBtn(card, 'Acessar', _url, _target);

        return card;
    }

    static addImg(card, _image) {
        const image = document.createElement('img');
        image.src = _image.src;
        image.alt = _image.alt;
        image.className = _className.image;

        card.appendChild(image);

        return null;
    }

    static addText(card, _title, _text) {
        const container = document.createElement('div');
        container.className = _className.textContainer;

        const title = document.createElement('h3');
        title.className = _className.title;
        title.innerHTML = _title;

        const text = document.createElement('p');
        text.className = _className.text;
        text.innerHTML = _text;

        container.append(title, text);

        card.appendChild(container);

        return null;
    }

    static addBtn(card, _text, _anchor, _target) {
        const button = document.createElement('a');
        button.className = _className.button;
        button.innerHTML = _text;

        _anchor ? button.href = _anchor : button.href = '#';
        _target ? button.target = _target : button.target = '_top';

        card.appendChild(button);

        return null;
    }

}