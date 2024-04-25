import { Container, Anchor, Image, Text } from "../components.js";
const devMode = false;
export function devLog(element) {
    if (devMode)
        console.log(element);
}
;
export class Card {
    constructor() {
        this.styles = {
            "CARD": "card",
            "IMAGE": "card__image",
            "TEXT_CONTAINER": "card__text",
            "TITLE": "card__headline",
            "TEXT": "card__content",
            "BUTTON": "card__button"
        };
    }
    create(_title = "default title", _desc = "default description", _button, _img) {
        try {
            return new Container().create("div", [
                new Image().create(_img.src, _img.alt, this.styles.IMAGE),
                new Container().create("div", [
                    new Text().create(_title, "h3", this.styles.TITLE),
                    new Text().create(_desc, "p", this.styles.TEXT)
                ], this.styles.TEXT_CONTAINER),
                new Anchor().create(_button.href, "ACESSAR", "_self", this.styles.BUTTON)
            ], this.styles.CARD);
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
