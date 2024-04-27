import { AbstractComponent, Anchor, Text } from "../components.js";
const styles = {
    "TITLE": "hero-banner__title",
    "DESC": "hero-banner__description",
    "BUTTON": "hero-banner__button"
};
export class Banner extends AbstractComponent {
    create(_banner, _title, _desc, _anchor) {
        try {
            const title = new Text().create({ content: _title, tag: "h2", className: styles.TITLE });
            const desc = new Text().create({ content: _desc, tag: "p", className: styles.DESC });
            const anchor = new Anchor().create(_anchor);
            if (title)
                _banner.appendChild(title);
            if (desc)
                _banner.appendChild(desc);
            if (anchor) {
                anchor.classList.add(styles.BUTTON);
                _banner.appendChild(anchor);
            }
            ;
            return _banner;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
