import { SmallCard } from "../Card/card.js";
const devMode = false;
export function devLog(element) {
    if (devMode)
        console.log(element);
}
;
fetch("../../../Components/base/integrantes.json", { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(".card-section--equipe");
    if (cardSection) {
        _data.map((data, di) => {
            const card = new SmallCard().create(data.nome, `RM ${data.rm}`, { "href": data.github }, { "src": data.avatar, "alt": `Avatar de ${data.nome}`, "rounded": "100%" });
            if (card)
                cardSection.appendChild(card);
        });
    }
})
    .catch((error) => console.error(error));
