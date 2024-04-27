import { Container, Anchor, Image, Text, AbstractComponent, IAnchor, IImage } from "../components.js";

const styles = {
    "CARD": "card",
    "IMAGE": "card__image",
    "TEXT_CONTAINER": "card__text-container",
    "TITLE": "card__title",
    "TEXT": "card__text",
    "BUTTON": "card__button"
}

interface ICard {
    create(_title: string, _desc: string, _button: IAnchor, _img: IImage): HTMLElement | null;
}

export class Card extends AbstractComponent implements ICard {
    create(_title: string="default title", _desc: string="default description", _button: IAnchor={ href: "#", content: "default button", target: "_self" }, _img: IImage): HTMLElement | null {
        try {
            const card = new Container().create({ tag: "div", elements: [
                new Image().create({ src: _img.src, alt: _img.alt, className: styles.IMAGE, rounded: _img.rounded}),
                new Container().create({ tag: "div", elements: [
                    new Text().create({ content: _title, tag: "h3", className: styles.TITLE }),
                    new Text().create({ content: _desc, tag: "p", className: styles.TEXT })
                ], className: styles.TEXT_CONTAINER }),
                new Anchor().create({ href: _button.href, content: _button.content, className: styles.BUTTON })
            ], className: styles.CARD })

            this.devLogComponent("CARD", "create", card);
            return card;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
