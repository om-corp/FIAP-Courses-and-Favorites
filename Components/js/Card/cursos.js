import { Card } from "./card.js";
fetch("../../../Components/base/cursos.json", { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(".card-section--cursos");
    if (cardSection) {
        _data.map((data) => {
            const card = new Card().create(data.title, data.desc, { href: data.url, content: "ACESSAR" }, { src: data.img.src, alt: data.img.alt });
            if (card)
                cardSection.appendChild(card);
        });
    }
})
    .catch((error) => console.error(error));
