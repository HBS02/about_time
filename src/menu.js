const menuHeader = document.querySelector(".menu__header");
const menuContent = document.querySelector(".menu__content");
const headerBtn = document.querySelector(".menu__header__btn ");
const headerText = document.querySelector(".menu__header__text");
const menuHome = document.querySelector(".menu-home");
const menuMovie = document.querySelector(".menu-movie");
const menuScene = document.querySelector(".menu-scene");
const menuIllust = document.querySelector(".menu-illust");
const menuVertical = document.querySelector(".menu__vertical");
menuHeader.addEventListener("click", onClickMenuHeader);
menuContent.addEventListener("click", onClickMenuContent);

let clicked = false;
let duration = 0;

function onClickMenuHeader(event) {
  // 메뉴 아이콘을 눌렀을 때 이벤트 발생
  const target = event.target; // 이벤트가 발생한 요소를 반환
  const dataset = target.dataset; // html에서 사용한 data- 값들 읽어냄. data-value = "scroll"
  const key = dataset.key; // data-key = "header-icon", "header-text"
  if (key === undefined) {
    return;
  } else {
    if (!clicked) {
      changeHeader("down");
      menuDown(menuVertical);
      menuDown(menuHome);
      menuDown(menuMovie);
      menuDown(menuScene);
      menuDown(menuIllust);
      clicked = true;
    } else {
      changeHeader("up");
      menuUp(menuVertical);
      menuUp(menuHome);
      menuUp(menuMovie);
      menuUp(menuScene);
      menuUp(menuIllust);
      clicked = false;
    }
  }
}

function menuUp(item) {
  item.style.opacity = "0";
  item.style.transitionDelay = `${duration}ms`;
  duration -= 80;
}

function menuDown(item) {
  item.style.opacity = `1`;
  item.style.transitionDelay = `${duration}ms`;
  duration += 80;
}

function onClickMenuContent(event) {
  const target = event.target;
  const dataset = target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "Home":
      const header = document.querySelector(".header");
      header.scrollIntoView({ behavior: "smooth" }); //behavior : "smooth"  부드럽게 이동
      break;
    case "Movie":
    case "Scene":
      const movie = document.querySelector(".movie");
      const movieRect = movie.getBoundingClientRect();
      // 이 Element.getBoundingClientRect()메서드는 DOMRect요소의 크기 및 뷰포트를 기준으로 한 위치에 대한 정보를 제공 하는 객체를 반환합니다 .
      // A DOMRect는 직사각형의 크기와 위치를 나타냅니다.

      const movieTop = movieRect.top;
      const movieHeight = movieRect.height;
      window.scrollBy({
        //이 Window.scrollBy()메서드는 주어진 양만큼 창에서 문서를 스크롤합니다.
        top: movieTop - movieHeight / 50,
        behavior: "smooth",
        left: 0,
      });
      break;
    case "Illust":
      const illust = document.querySelector(".movie__illust");
      const illustRect = illust.getBoundingClientRect();
      const illustTop = illustRect.top;
      const illustHeight = illustRect.height;
      window.scrollBy({
        top: illustTop - illustHeight / 3,
        behavior: "smooth",
        left: 0,
      });
      break;
    default:
      throw Error(`Click Wrong Button`);
  }
}

function changeHeader(text) {
  if (text === "down") {
    headerBtn.innerHTML = `<i class="fas fa-times" data-key="header-icon" data-value="scroll" ></i>`;
    headerText.innerText = `Close`;
  } else {
    headerBtn.innerHTML = `<i class="fas fa-bars" data-key="header-icon" data-value="scroll" ></i>`;
    headerText.innerText = `Menu`;
  }
}
