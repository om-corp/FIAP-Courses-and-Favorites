import { Card } from "./card.js";

const cardSectionID = ".card-section--favorites";
const url = "/Components/base/favoritos.json";

fetch(url, {method: "GET"})
    .then((_response) => _response.json())
    .then((_data) => {
        const cardSection = document.querySelector( cardSectionID );
        if (cardSection) {
            _data.map((data: any) => {

                data.sites.map((site: any) => {
                    const card = new Card().create(
                        site.imgAlt, data.integrante, 
                        { href: site.href, content: "VISITAR PÁGINA" }, 
                        { src: site.imgSrc, alt: site.imgAlt }
                    );
                    
                    if (card) cardSection.appendChild(card);
                })
            })
        }
    })
    .catch((error) => console.error(error));

