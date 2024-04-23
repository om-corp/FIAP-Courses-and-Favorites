import Anchor from "../Main/anchor.js";
import Container from "../Main/container.js";
import Image from "../Main/image.js";

//TODO: CORRIGIR CABEÇALHO
export default class Cabecalho {

    styles = {
        "HEADER": "cabecalho",
        "IMAGE": "cabecalho__logo",
        "UNORDERED_LIST": "cabecalho__nav",
        "ANCHOR": "link",
        "CURRENT_PAGE": "lnk--paginia-atual"
    };

    links = [
        { 'href': '/index.html', 'text': 'Página Inicial' },
        { 'href': '/cursos.html', 'text': 'Cursos' },
        { 'href': '/fav.html', 'text': 'Favoritos' },
        { 'href': '/integrantes.txt', 'text': 'Equipe' }
    ];

    constructor(id, {imgSrc, imgAlt}, page) {
        const header = document.getElementById(id);

        try {
            
            const nav = document.createElement('nav');
            
            const ul = this.newUnorderedList( 
                this.classNames.ul, 
                Cabecalho.links, 
                page,
                { 
                    itemClassName: this.classNames.a,
                    specialItemClassName: this.classNames.currentPage
                }
            );
            nav.appendChild(ul);
            
            const img = this.newImg(this.classNames.img, imgSrc, imgAlt);

            header.appendChild(img);
            header.appendChild(nav);

        } catch (error) {
            console.error(error);
        }

    }
    
    newUnorderedList( itemList ) {
        return new Container.create(
            'ul', this.styles.UNORDERED_LIST, 
            ()=> {
                itemList.map(item => {
                const li = document.createElement('li');
    
                li.appendChild(
                    new Anchor( 
                        item.href, 
                        item.text,
                        [ 
                            this.styles.ANCHOR, 
                            isSpecial ? this.styles.CURRENT_PAGE : '' 
                        ]
                    )
                )
    
                ul.appendChild(li);
            })}
        )
        
        return ul;
    }
    
    newImage(src, alt) {
        return new Anchor(
            Cabecalho.links[0].href, 
            Anchor.target.TOP, 
            new Image(src, alt, this.styles.IMAGE)
        )
    }

}
