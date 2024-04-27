import { Card } from "./card.js";
const cardSectionID = ".card-section--equipe";
const url = "../../components/base/equipe.json";
fetch(url, { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(cardSectionID);
    if (cardSection) {
        _data.map((data) => {
            const card = new Card().create(data.nome, `RM ${data.rm}`, { href: data.github, content: "VISITAR GITHUB" }, { src: data.avatar, alt: `Avatar de ${data.nome}`, rounded: "100%" });
            if (card)
                cardSection.appendChild(card);
        });
    }
})
    .catch((error) => console.error(error));
