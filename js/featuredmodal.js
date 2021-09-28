let onclickImage;
let isOpen = false;

function init() {
  onclickImage = document.querySelector("section.query-content img");
  onclickImage.onclick = openModal;
}

function openModal() {
  if (isOpen === false) {
    onclickImage.classList.add("modal-open");
    //onclickImage.classList.add("overlay"); //modal overlay box som er display hidden og kommentert ut i CSSn nå.

    //onclickImage.className += "imageModal"; //class som er lagt til som skulle align`e bilde boxn.
    //onclickImage.style.display = "block";
    //onclickImage.style.width = "80%";
    //onclickImage.style.height = "80%";
  } else {
    //onclickImage.classList.remove("overlay"); //modal overlay box
    onclickImage.classList.remove("modal-open");
  }

  isOpen = !isOpen;
}

setTimeout(init, 2000);
