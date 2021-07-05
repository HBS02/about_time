const sceneContent = document.querySelector(".scene__content");
const sceneSlider = document.querySelector(".scene__slider");

let AMOUNT_SCENE = 0;

sceneContent.addEventListener("click", onClickScene);

function onClickScene(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right__btn") {
    AMOUNT_SCENE -= 100;
    if (AMOUNT_SCENE < -100) {
      AMOUNT_SCENE = -100;
    }
    sceneSlider.setAttribute(
      "style",
      `transform: translateX(${AMOUNT_SCENE}%)`
    );
  } else {
    AMOUNT_SCENE += 100;
    if (AMOUNT_SCENE > 0) {
      AMOUNT_SCENE = 0;
    }
    sceneSlider.setAttribute(
      "style",
      `transform: translateX(${AMOUNT_SCENE}%)`
    );
  }
}
