import { Container, Anchor, Image, AbstractComponent } from "../components.js";
const styles = {
    "LOGO": "cabecalho__logo",
    "UL": "cabecalho__nav",
    "A": "link",
    "CURRENT_PAGE": "link--pagina-atual"
};
export class Cabecalho extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.devMode = false;
    }
    create(_header, _currentPage, _links) {
        try {
            if (_header) {
                this.devLogComponent("CABEÇALHO", "create", { _header, _currentPage, _links });
                const logo = new Image().create({ src: "/Assets/logos/logo-fiap.png", alt: "FIAP", className: styles.LOGO });
                _links.map(link => this.devLog(link));
                const nav = new Container().create({ tag: "nav", elements: [
                        new Container().create({ tag: "ul", elements: _links.map((link) => {
                                return new Container().create({ tag: "li", elements: [
                                        new Anchor().create({ href: link.href, content: link.content, className: styles.A }, { isSpecial: link.content == _currentPage, specialClass: "link--pagina-atual" })
                                    ] });
                            }), className: styles.UL })
                    ] });
                if (logo) {
                    this.devLog(`LOGO: ${logo.innerHTML}`);
                    _header.appendChild(logo);
                }
                if (nav) {
                    this.devLog(`NAV: ${nav.innerHTML}`);
                    _header.appendChild(nav);
                }
                this.devLogComponent("CABEÇALHO", "create", { _header });
            }
            return _header;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
