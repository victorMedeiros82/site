import { typeWrite } from "../js/typeWrite.js";
import { clickChangeDescription } from "../js/clickChangeDescription.js";
typeWrite(document.querySelector(".typewriter"));

clickChangeDescription(
    ".html5-icon",
    "<h1 class='text-lime'>HTML</h1><p>De acordo com o site <a href='https://www.w3schools.com/html/html_intro.asp' target='_blank'>W3 School</a> é a linguagem de marcação padrão para páginas da Web.</p>"
);
clickChangeDescription(
    ".css3-icon",
    "<h1 class='text-lime'>CSS3</h1> é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
clickChangeDescription(
    ".javaScript-icon",
    "<h1 class='text-lime'>JAVASCRIPT</h1> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);