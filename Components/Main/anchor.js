
export default class Anchor {
    
    static target = {
        "BLANK": "_blank",
        "PARENT": "_parent",
        "SELF":  "_self",
        "TOP": "_top"
    }

    constructor(link, content, classList='', target=Anchor.target.TOP) {
        this.createAnchor(link, content, classList, target);
    }

    createAnchor(link, content, classList, target) {
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.innerHTML = content;
        anchor.classList = classList;
        anchor.target in Anchor.target ?  anchor.target = target : console.error("Target não identificado");
        return anchor;
    }

}
