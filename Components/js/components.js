import { devLog } from "./developer-mode.js";
class Component {
    create(_className, _id) {
        throw new Error("Method not implemented");
    }
}
export class Container {
    create(_tag = "div", _elements, _className, _id) {
        try {
            const container = document.createElement(_tag);
            if (_className)
                container.className = _className;
            if (_id)
                container.id = _id;
            if (_elements) {
                _elements.map((element, i) => {
                    if (element)
                        container.appendChild(element);
                    else
                        console.error(`Erro ao adcionar ${i}° elemento de ${_tag}`);
                    devLog(`\nCONTAINER elements:\nelement: ${element === null || element === void 0 ? void 0 : element.innerHTML}\n\n`);
                });
            }
            ;
            devLog(`\nCONTAINER create | params:\ntag: ${_tag}\nelements: ${_elements}\nclassName: ${_className}\nID: ${_id}\n\nCONTAINER: ${container}\n\n`);
            return container;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
    add(_container, _element) {
        try {
            devLog(`CONTAINER add: before: ${_container}: ${_element}`);
            _container.appendChild(_element);
            devLog(`CONTAINER add: after: ${_container}`);
            return _container;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    addAll(_container, _elements) {
        try {
            _elements.map((element, i) => {
                if (element)
                    _container.appendChild(element);
                else
                    console.error(`Erro ao adcionar ${i}° elemento de ${element}`);
                devLog(`CONTAINER addAll: ${_container}: ${element}`);
            });
            return _container;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class Anchor {
    create(_href = "#", _content = "default anchor", _target = "_self", _className, _id, _isSpecial) {
        try {
            const anchor = document.createElement("a");
            anchor.href = _href;
            anchor.innerHTML = _content;
            anchor.target = _target;
            if (_className)
                anchor.className = _className;
            if (_id && _isSpecial)
                anchor.id = _id;
            devLog(`\nANCHOR params: \nhref: ${_href}\ncontent: ${_content}\ntarget: ${_target}\nclassName: ${_className}\nID: ${_id}\n\nANCHOR: ${anchor}\n\n`);
            return anchor;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class Image {
    create(_src, _alt, _className, _id) {
        try {
            const image = document.createElement('img');
            image.src = _src;
            if (_alt)
                image.alt = _alt;
            if (_className)
                image.className = _className;
            if (_id)
                image.id = _id;
            devLog(`\nIMAGE params: \nsrc: ${_src}\nalt: ${_alt}\nclassName: ${_className}\nID: ${_id}\n\nIMAGE: ${image}\n\n`);
            return image;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
export class Text {
    create(_content = "default text", _tag = "p", _className, _id) {
        try {
            const text = document.createElement(_tag);
            text.innerHTML = _content;
            if (_className)
                text.className = _className;
            if (_id)
                text.id = _id;
            devLog(`\nTEXT params: \ncontent: ${_content}\ntag: ${_tag}\nclassName: ${_className}\nID: ${_id}\n\nTEXT: ${text}\n\n`);
            return text;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
