
export default class Image {

    constructor(src, alt, className='') {
        this.createImage(src, alt, className);
    }

    createImage(src, alt, className) {
        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        image.className = className;
        return image;
    }

}
