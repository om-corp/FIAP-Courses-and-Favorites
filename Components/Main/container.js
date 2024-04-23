
export default class Container {

    constructor() {}

    static create(tag, className, ...elements) {
        const container = document.createElement( tag );
        container.className = className

        for (const element in elements) container.appendChild(element);
        
        return container;
    }

    static add(container, ...elements) {
        for (const element in elements) container.appendChild(element);
        return container;
    }

}
