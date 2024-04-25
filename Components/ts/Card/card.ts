import { Container, Anchor, Image, Text } from "../components.js";

const devMode = false;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

export class Card {

    private styles = {
        "CARD": "card",
        "IMAGE": "card__image",
        "TEXT_CONTAINER": "card__text",
        "TITLE": "card__headline",
        "TEXT": "card__content",
        "BUTTON": "card__button"
    }

    create(_title: string="default title", _desc: string="default description", _button: {href: string}, _img: {src: string, alt: string}): HTMLElement | null {
        try {
            return new Container().create("div", [
                new Image().create(_img.src, _img.alt, this.styles.IMAGE),
                new Container().create("div", [
                    new Text().create(_title, "h3", this.styles.TITLE),
                    new Text().create(_desc, "p", this.styles.TEXT)
                ], this.styles.TEXT_CONTAINER),
                new Anchor().create(_button.href, "ACESSAR", "_self", this.styles.BUTTON)

            ], this.styles.CARD);
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}
