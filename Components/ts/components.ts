import { devLog } from "./developer-mode.js";

abstract class Component {

    create(_className?: string | undefined, _id?: string | undefined): HTMLElement | null {
        throw new Error("Method not implemented");
    }

}

export class Container {

    create(_tag: string="div", _elements?: (HTMLElement | null)[], _className?: string | undefined, _id?: string | undefined): HTMLElement | null {
        try {
            const container = document.createElement(_tag);
            if (_className) container.className = _className;
            if (_id) container.id = _id;
            if (_elements) {
                _elements.map((element, i) => {
                    if(element) container.appendChild(element);
                    else console.error(`Erro ao adcionar ${i}° elemento de ${_tag}`);
                    devLog(`\nCONTAINER elements:\nelement: ${element?.innerHTML}\n\n`)
                })
            };
            devLog(`\nCONTAINER create | params:\ntag: ${_tag}\nelements: ${_elements}\nclassName: ${_className}\nID: ${_id}\n\nCONTAINER: ${container}\n\n`)
            return container;

        } catch (e) {
            console.error(e);
            return null;
        }
    }

    add(_container: HTMLElement, _element: HTMLElement): HTMLElement | null {
        try {
            devLog(`CONTAINER add: before: ${_container}: ${_element}`)
            _container.appendChild(_element);
            devLog(`CONTAINER add: after: ${_container}`)
            return _container;

        } catch (error) {
            console.error(error);
            return null;
        }
    }

    addAll(_container: HTMLElement, _elements: (HTMLElement |  null)[]) {
        try {
            _elements.map((element, i) => {
                if(element) _container.appendChild(element);
                else console.error(`Erro ao adcionar ${i}° elemento de ${element}`);
                devLog(`CONTAINER addAll: ${_container}: ${element}`);
            })
            return _container;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export class Anchor {

    create(_href: string="#", _content: string="default anchor", _target: string="_self", _className?: string | undefined, _id?: string | undefined, _isSpecial?: boolean | undefined): HTMLElement | null {
        try {
            const anchor = document.createElement("a");
            anchor.href = _href;
            anchor.innerHTML = _content;
            anchor.target = _target;
            if (_className) anchor.className = _className;
            if (_id && _isSpecial) anchor.id = _id;
            devLog(`\nANCHOR params: \nhref: ${_href}\ncontent: ${_content}\ntarget: ${_target}\nclassName: ${_className}\nID: ${_id}\n\nANCHOR: ${anchor}\n\n`)
            return anchor;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export class Image {

    create(_src: string, _alt?: string,_className?: string | undefined, _id?: string | undefined): HTMLElement | null {
        try {
            const image = document.createElement('img');
            image.src = _src;
            if (_alt) image.alt = _alt;
            if (_className) image.className = _className;
            if (_id) image.id = _id;
            devLog(`\nIMAGE params: \nsrc: ${_src}\nalt: ${_alt}\nclassName: ${_className}\nID: ${_id}\n\nIMAGE: ${image}\n\n`)
            return image;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export class Text {

    create(_content: string="default text", _tag: string="p", _className?: string | undefined, _id?: string | undefined): HTMLElement | null {
        try {
            const text = document.createElement(_tag);
            text.innerHTML = _content;
            if (_className) text.className = _className;
            if (_id) text.id = _id;
            devLog(`\nTEXT params: \ncontent: ${_content}\ntag: ${_tag}\nclassName: ${_className}\nID: ${_id}\n\nTEXT: ${text}\n\n`)
            return text;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
