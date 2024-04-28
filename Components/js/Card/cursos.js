import { Card } from "./card.js";
const cardSectionID = ".card-section--cursos";
const url = "/Components/base/cursos.json";
fetch(url, { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(cardSectionID);
    if (cardSection) {
        _data.map((data) => {
            const card = new Card().create(data.title, data.desc, { href: data.url, content: "ACESSAR" }, { src: "/Assets/logos/logo-fiap.png", alt: "FIAP" });
            if (card)
                cardSection.appendChild(card);
        });
    }
})
    .catch((error) => console.error(error));
