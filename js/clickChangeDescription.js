export function clickChangeDescription(icon, text) {
  const description = document.querySelector(".description");
  const iconHtml5 = document.querySelector(".html5-icon")
  const iconCss3 = document.querySelector(".css3-icon")
  const iconJs = document.querySelector(".javaScript-icon")
  document.querySelector(icon).addEventListener("click", () => {
    switch (icon) {
      case ".html5-icon":
        iconHtml5.classList.add("html5");
        iconCss3.classList.remove("css3");
        iconJs.classList.remove("javaScript");
        break;
        case ".css3-icon":
          iconCss3.classList.add("css3");
          iconHtml5.classList.remove("html5");
          iconJs.classList.remove("javaScript");
          break;
          case ".javaScript-icon":
            iconJs.classList.add("javaScript");
            iconCss3.classList.remove("css3");
            iconHtml5.classList.remove("html5");
        break;
    }
    description.innerHTML = text;
  })
}
