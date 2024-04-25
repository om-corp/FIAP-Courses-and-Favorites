import { BigCard, devLog } from "./card.js";
fetch("../../../Components/base/cursos.json", { method: "GET" })
    .then((_response) => _response.json())
    .then((_data) => {
    const cardSection = document.querySelector(".card-section--cursos");
    if (cardSection) {
        _data.map((data, i) => {
            const card = new BigCard().create(data.title, data.desc, { "href": data.url }, { "src": data.img.src, "alt": data.img.alt });
            if (card)
                cardSection.appendChild(card);
            devLog(`\nCARD ${i + 1}:\nTitle: ${data.title}\nDescription: ${data.desc}\nImage: ${data.img.src}\n\n`);
        });
    }
})
    .catch((error) => console.error(error));
