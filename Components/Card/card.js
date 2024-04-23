import Container from "../Main/container";
import Text from "../Main/text";

export default class Card {

    styles = {
        "CARD": "card",
        "IMAGE": "card__image",
        "TEXT_CONTAINER": "card__text",
        "TITLE": "card__headline",
        "TEXT": "card__content",
        "BUTTON": "card__button"
    };

    constructor(title, text, url, image, target) {
        const card = document.createElement('div');

        if (image) this.addImg(card, image);

        this.addText(card, title, text)
        this.addBtn(card, "Acessar", url, target);

        return card;
    }

    addImg(card, image) {
        const image = document.createElement('img');
        image.src = image.src;
        image.alt = image.alt;
        image.className = this.style.IMAGE;

        card.appendChild(image);

        return null;
    }

    addText(card, title, text) {
        return card.appendChild(
            Container.create( 'div', this.styles.TEXT_CONTAINER,  [
                Text('h3', this.styles.TITLE, title),
                Text('p', this.styles.TEXT, text)
            ])
        );
    }

    addBtn(card, text, anchor, target) {
        const button = document.createElement('a');
        button.className = _className.button;
        button.innerHTML = _text;

        _anchor ? button.href = _anchor : button.href = "#";
        _target ? button.target = _target : button.target = '_top';

        card.appendChild(button);

        return null;
    }

}