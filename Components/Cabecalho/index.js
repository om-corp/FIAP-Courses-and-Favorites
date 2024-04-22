
class Cabecalho {
    classNames = {
        'header': 'cabecalho',
        'img': 'cabecalho__logo',
        'ul': 'cabecalho__nav',
        'a': 'link',
        'currentPage': 'link--pagina-atual'
    };

    static links = [
        { 'href': '/index.html', 'text': 'Página Inicial' },
        { 'href': '/cursos.html', 'text': 'Cursos' },
        { 'href': '/fav.html', 'text': 'Favoritos' },
        { 'href': '/integrantes.txt', 'text': 'Equipe' }
    ];

    constructor(id, {imgSrc, imgAlt}, page) {
        const header = document.getElementById(id);
        console.log(page);

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

            console.log(Cabecalho.links);

        } catch (error) {
            console.error(error);
        }

    }
    
    newUnorderedList(className, items, currentPage, {itemClassName, specialItemClassName}) {
        const uListTag = document.createElement('ul');
        uListTag.className = className;
    
        items.map((item, i) => {
            uListTag.appendChild( 
                this.newItem(
                    itemClassName, 
                    { 
                        href: item.href, 
                        text: item.text 
                    }, 
                    { 
                        isSpecial: (item.text || item.href) == currentPage, 
                        specialClassName: specialItemClassName
                    }
                )
            )
        })
        
        return uListTag;
    }
    
    newImg(className, src, alt) {
        const imgTag = document.createElement('img');
        imgTag.className = className;
        imgTag.src = src;
        imgTag.alt = alt;
        return imgTag
    }
    
    newItem(className, {href, text}, {isSpecial, specialClassName}) {
    
        const itemTag = document.createElement('li');
        
        const anchorTag = document.createElement('a');
        anchorTag.classList.add( className );
        
        if ( isSpecial ) anchorTag.classList.add( specialClassName );
    
        anchorTag.href = href;
        anchorTag.innerHTML = text;
    
        itemTag.appendChild(anchorTag);
    
        return itemTag;
    }
}

new Cabecalho(
    'cabecalho--principal', 
    { imgSrc: '/img/fiap.png', imgAlt: 'FIAP' },
    Cabecalho.links[0].text
)
new Cabecalho(
    'cabecalho--cursos', 
    { imgSrc: '/img/fiap.png', imgAlt: 'FIAP' },
    Cabecalho.links[1].text
)
new Cabecalho(
    'cabecalho--favoritos', 
    { imgSrc: '/img/fiap.png', imgAlt: 'FIAP' },
    Cabecalho.links[2].text
)
new Cabecalho(
    'cabecalho--equipe', 
    { imgSrc: '/img/fiap.png', imgAlt: 'FIAP' },
    Cabecalho.links[3].text
)
