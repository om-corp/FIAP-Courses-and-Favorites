import { Card } from "./card.js";
const devMode = false;
export function devLog(element) {
    if (devMode)
        console.log(element);
}
;
fetch("../../../Components/base/favoritos.json", { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(".card-section--favorites");
    if (cardSection) {
        _data.map((data, di) => {
            data.sites.map((site, si) => {
                const card = new Card().create(site.imgAlt, data.integrante, { href: site.href, content: "VISITAR PÁGINA" }, { src: site.imgSrc, alt: site.imgAlt });
                if (card)
                    cardSection.appendChild(card);
            });
        });
    }
})
    .catch((error) => console.error(error));
