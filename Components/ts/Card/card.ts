import { Container, Anchor, Image, Text } from "../components.js";

const devMode = false;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

const styles = {
    "CARD": "card",
    "IMAGE": "card__image",
    "TEXT_CONTAINER": "card__text",
    "TITLE": "card__headline",
    "TEXT": "card__content",
    "FOOTER": "card__footer",
    "BUTTON": "card__button"
}

interface ICard {
    create(_title: string, _desc: string, _button: { href: string }, _img: { src: string, alt: string }): HTMLElement | null;
}

abstract class Card implements ICard {

    create(_title: string="default title", _desc: string="default description", _button: {href: string}, _img: {src: string, alt: string}): HTMLElement | null {
        try {
            return null;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export class SmallCard extends Card implements ICard {
    create(_title: string | undefined, _desc: string | undefined, _button: { href: string; }, _img: { src: string; alt: string; }): HTMLElement | null {
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

export class BigCard extends Card implements ICard {
    create(_title: string | undefined, _desc: string | undefined, _button: { href: string; }, _img: { src: string; alt: string; }): HTMLElement | null {
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
