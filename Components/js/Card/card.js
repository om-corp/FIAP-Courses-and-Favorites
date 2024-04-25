import { Container, Anchor, Image, Text } from "../components.js";
const devMode = false;
export function devLog(element) {
    if (devMode)
        console.log(element);
}
;
const styles = {
    "CARD": "card",
    "IMAGE": "card__image",
    "TEXT_CONTAINER": "card__text",
    "TITLE": "card__headline",
    "TEXT": "card__content",
    "FOOTER": "card__footer",
    "BUTTON": "card__button"
};
class Card {
    create(_title = "default title", _desc = "default description", _button, _img) {
        try {
            return null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class SmallCard extends Card {
    create(_title, _desc, _button, _img) {
        return new Container().create("div", [
            new Image().create(_img.src, _img.alt, styles.IMAGE),
            new Container().create("div", [
                new Text().create(_title, "h3", styles.TITLE),
                new Text().create(_desc, "p", styles.TEXT)
            ], styles.TEXT_CONTAINER),
            new Container().create("footer", [
                new Anchor().create(_button.href, "ACESSAR", "_self", styles.BUTTON)
            ], styles.FOOTER)
        ], styles.CARD);
    }
}
export class BigCard extends Card {
    create(_title, _desc, _button, _img) {
        return new Container().create("div", [
            new Container().create("div", [
                new Image().create(_img.src, _img.alt, styles.IMAGE),
                new Text().create(_title, "h3", styles.TITLE),
                new Text().create(_desc, "p", styles.TEXT)
            ], styles.TEXT_CONTAINER),
            new Container().create("footer", [
                new Anchor().create(_button.href, "ACESSAR", "_self", styles.BUTTON)
            ], styles.FOOTER)
        ], styles.CARD);
    }
}
