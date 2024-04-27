
export interface ISelector {
    className?: string;
    id?: string;
}

export interface ISpecialClass {
    isSpecial: boolean;
    specialClass: string;
}

export interface IContainer extends ISelector {
    tag: string;
    elements?: (HTMLElement | null)[];
}

export interface IAnchor extends ISelector {
    href: string;
    content: string;
    target?: string;
}

export interface IImage extends ISelector {
    src: string;
    alt?: string;
    rounded?: string;
}

export interface IText extends ISelector {
    content: string;
    tag: string;
}

export abstract class AbstractComponent {

    protected addSelector(_component: HTMLElement, _className?: string, _id?: string) {
        if (_className) _component.classList.add(_className);
        if (_id) _component.id = _id;
    }

    protected devMode = false;

    protected devLog(element: any) {
        if (this.devMode) console.log(element);
    }

    protected devLogComponent(_name: string, _function: string, _params: any) {
        if (this.devMode) {
            this.devLog(`${_name} ${_function} | params`)
            for (const item in _params) {
                this.devLog(`${item}: ${_params[item]}`);
            }
        }
    }
}

export class Container extends AbstractComponent {

    protected devMode: boolean = false;

    create(_container: IContainer={tag: "div", elements: []}): HTMLElement | null {
        try {
            const container = document.createElement(_container.tag);

            this.addSelector(container, _container.className, _container.id );

            if (_container.elements) {
                _container.elements.map((element, i) => {
                    if(element) {
                        container.appendChild(element);
                        this.devLogComponent( "CONTAINER", "elements", [element.innerHTML]);
                    }
                })
            };
            
            this.devLogComponent( "CONTAINER", "create", _container);
            return container;

        } catch (e) {
            console.error(e);
            return null;
        }
    }

}

export class Anchor extends AbstractComponent {

    protected devMode: boolean = false;

    create(_anchor: IAnchor={ href: "#", content: "default anchor", target: "_self" }, _special?: ISpecialClass): HTMLElement | null {
        try {
            const anchor = document.createElement("a");
            anchor.href = _anchor.href;
            anchor.innerHTML = _anchor.content;
            _anchor.target ? anchor.target = _anchor.target : "_self";
            this.addSelector(anchor, _anchor.className, _anchor.id );
            if (_special) {
                this.devLog(`ìsSpecial: ${_special.isSpecial}`)
                if (_special.isSpecial) anchor.classList.add(_special.specialClass);
                this.devLog(`anchor with special class: ${anchor.innerHTML}`)
            }
            
            this.devLogComponent("ANCHOR", "create", _anchor);
            return anchor;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export class Image extends AbstractComponent {

    protected devMode: boolean = false;

    create(_image: IImage={src: "", alt: "", rounded: "0"}): HTMLElement | null {
        try {
            const image = document.createElement('img');
            image.src = _image.src;
            if (_image.alt) image.alt = _image.alt;
            if (_image.rounded) image.style.borderRadius = _image.rounded;

            this.addSelector(image, _image.className, _image.id );
            this.devLogComponent("IMAGE", "create", _image);
            
            return image;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export class Text extends AbstractComponent {

    protected devMode: boolean = false;

    create(_text: IText={ content: "default text", tag: "p" }): HTMLElement | null {
        try {
            const text = document.createElement(_text.tag);
            text.innerHTML = _text.content;

            this.addSelector(text, _text.className, _text.id );
            this.devLogComponent("TEXT", "create", _text);

            return text;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
