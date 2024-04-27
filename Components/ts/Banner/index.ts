import { Banner } from "./banner.js";

const info = {
    "title": "Desbrave o Futuro com Nossos Cursos de Tecnologia",
    "desc": "Prepare-se para uma carreira de sucesso com os cursos inovadores da nossa faculdade de tecnologia. Explore as últimas tendências, domine habilidades essenciais e conquiste o mercado de trabalho. Seja parte da revolução digital!",
    "button": {
        "href": "./pages/cursos.html",
        "content": "Explore Nossos Cursos"
    }
}

const banner = document.getElementById("hero-banner-principal");

if (banner) new Banner().create(
    banner, info.title, info.desc, 
    { href: info.button.href, content: info.button.content }
);

