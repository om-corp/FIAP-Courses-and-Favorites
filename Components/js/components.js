export class AbstractComponent {
    constructor() {
        this.devMode = false;
    }
    addSelector(_component, _className, _id) {
        if (_className)
            _component.classList.add(_className);
        if (_id)
            _component.id = _id;
    }
    devLog(element) {
        if (this.devMode)
            console.log(element);
    }
    devLogComponent(_name, _function, _params) {
        if (this.devMode) {
            this.devLog(`${_name} ${_function} | params`);
            for (const item in _params) {
                this.devLog(`${item}: ${_params[item]}`);
            }
        }
    }
}
export class Container extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.devMode = false;
    }
    create(_container = { tag: "div", elements: [] }) {
        try {
            const container = document.createElement(_container.tag);
            this.addSelector(container, _container.className, _container.id);
            if (_container.elements) {
                _container.elements.map((element, i) => {
                    if (element) {
                        container.appendChild(element);
                        this.devLogComponent("CONTAINER", "elements", [element.innerHTML]);
                    }
                });
            }
            ;
            this.devLogComponent("CONTAINER", "create", _container);
            return container;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
}
export class Anchor extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.devMode = false;
    }
    create(_anchor = { href: "#", content: "default anchor", target: "_self" }, _special) {
        try {
            const anchor = document.createElement("a");
            anchor.href = _anchor.href;
            anchor.innerHTML = _anchor.content;
            anchor.target = _anchor.target;
            this.addSelector(anchor, _anchor.className, _anchor.id);
            if (_special) {
                this.devLog(`ìsSpecial: ${_special.isSpecial}`);
                if (_special.isSpecial)
                    anchor.classList.add(_special.specialClass);
                this.devLog(`anchor with special class: ${anchor.innerHTML}`);
            }
            this.devLogComponent("ANCHOR", "create", _anchor);
            return anchor;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class Image extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.devMode = false;
    }
    create(_image, _rounded) {
        try {
            const image = document.createElement('img');
            image.src = _image.src;
            if (_image.alt)
                image.alt = _image.alt;
            if (_rounded)
                image.style.borderRadius = _rounded;
            this.addSelector(image, _image.className, _image.id);
            this.devLogComponent("IMAGE", "create", _image);
            return image;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class Text extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.devMode = false;
    }
    create(_text = { content: "default text", tag: "p" }) {
        try {
            const text = document.createElement(_text.tag);
            text.innerHTML = _text.content;
            this.addSelector(text, _text.className, _text.id);
            this.devLogComponent("TEXT", "create", _text);
            return text;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
