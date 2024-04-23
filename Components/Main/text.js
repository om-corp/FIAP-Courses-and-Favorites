
export default class Text {

    constructor(tag, className, content) {
        this.createText(tag, className, content);
    }

    createText(tag, className, content) {
        const text = document.createElement( tag );
        text.className = className
        text.innerHTML = content;
        return text;
    }

}
