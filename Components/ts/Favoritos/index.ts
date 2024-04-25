import { SmallCard } from "../Card/card.js";

const devMode = false;

export function devLog(element: any) {
    if (devMode) console.log(element);
};

fetch("../../../Components/base/favoritos.json", {method: "GET"})
    .then((_response) => _response.json())
    .then((_data) => {
        const cardSection = document.querySelector(".card-section--favorites");
        
        if (cardSection) {
            _data.map((data: any, di: number) => {
                data.sites.map((site: any, si: number) => {
                    const card = new SmallCard().create(site.imgAlt, data.integrante, {"href": site.href}, {"src": site.imgSrc, "alt": site.imgAlt})
                    if (card) cardSection.appendChild( card );
                })
            })
        }
        
    })
    .catch((error) => console.error(error));
