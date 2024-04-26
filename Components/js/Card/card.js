import { Container, Anchor, Image, Text, AbstractComponent } from "../components.js";
const styles = {
    "CARD": "card",
    "IMAGE": "card__image",
    "TEXT_CONTAINER": "card__text",
    "TITLE": "card__headline",
    "TEXT": "card__content",
    "FOOTER": "card__footer",
    "BUTTON": "card__button"
};
export class Card extends AbstractComponent {
    create(_title = "default title", _desc = "default description", _button = { href: "#", content: "default button", target: "_self" }, _img) {
        try {
            const card = new Container().create({ tag: "div", elements: [
                    new Image().create({ src: _img.src, alt: _img.alt, className: styles.IMAGE, rounded: _img.rounded }),
                    new Container().create({ tag: "div", elements: [
                            new Text().create({ content: _title, tag: "h3", className: styles.TITLE }),
                            new Text().create({ content: _desc, tag: "p", className: styles.TEXT })
                        ], className: styles.TEXT_CONTAINER }),
                    new Container().create({ tag: "footer", elements: [
                            new Anchor().create({ href: _button.href, content: _button.content, className: styles.BUTTON })
                        ], className: styles.FOOTER })
                ], className: styles.CARD });
            this.devLogComponent("CARD", "create", card);
            return card;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
