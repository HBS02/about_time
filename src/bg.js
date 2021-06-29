const body = document.querySelector("body");

function handleload(image) {
  image.classList.add("bgImage");
  body.prepend(image);
}

function paintImage() {
  const image = new Image();
  image.src = `../img/main.jpg`;
  image.addEventListener("load", handleload(image));
}

paintImage();
