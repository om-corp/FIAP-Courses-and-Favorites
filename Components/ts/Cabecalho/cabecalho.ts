import { Container, Anchor, Image } from "../components.js";

const devMode = false;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

export class Cabecalho {

    private styles = {
        "IMAGE": "cabecalho__logo",
        "UNORDERED_LIST": "cabecalho__nav",
        "ANCHOR": "link",
        "CURRENT_PAGE": "link--pagina-atual"
    };

    create(_header: HTMLElement, _currentPage: string, _links: {"href": string, "text": string}[], _img: {"src": string, "alt": string}): HTMLElement | null {
        try {
            if (_header) {
                devLog(`\nCABEÇALHO create | params:\nheader: ${_header.innerHTML}\ncurrentPage: ${_currentPage}\nlinks: ${_links}\nimg: ${_img}\n\n`);
                devLog("LOGO:")
                const logo = new Image().create(_img.src, _img.alt, this.styles.IMAGE);
                devLog("NAV:")
                const nav = new Container().create("nav", [
                    new Container().create("ul", _links.map(link => 
                        new Container().create("li", [
                            new Anchor().create(link.href, link.text, "_self", this.styles.ANCHOR, this.styles.CURRENT_PAGE, _currentPage == link.text)
                        ])
                    ), this.styles.UNORDERED_LIST),
                ]);
                
                if (logo) _header.appendChild(logo);
                if (nav) _header.appendChild(nav);

                devLog(`\nCABEÇALHO: ${_header.innerHTML}\n\n`);

            }
            return _header;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
