const $menuContainer = document.querySelector("#menu-container");
const $menuTitle = document.querySelector("#menu-title");
const $menuList = document.querySelector("#menu-list");
const $mouseMoveOutput = document.querySelector("#mouse-move-output");
const classList = $menuList.classList;

const removeHideListClass = () => {
  classList.remove("hide-list");
};

const addHideListClass = () => {
  classList.add("hide-list");
};

const getListItemTxt = (listItem) => {
  if (listItem.classList.contains("menu-item")) {
    const listItemTxt = listItem.innerText;
    return listItemTxt;
  }
};

const recordMouseMoveData = (object, key) => {
  if (!object.hasOwnProperty(key)) {
    object[key] = 1;
  } else {
    object[key] += 1;
  }
};

const renderOutput = (dataObj) => {
  let outputTemplate = "";

  for (let key in dataObj) {
    outputTemplate += `<p>${key}: ${dataObj[key]}<p>`;
  }

  $mouseMoveOutput.insertAdjacentHTML("beforeend", outputTemplate);
};

const eraseOutput = () => {
  while ($mouseMoveOutput.hasChildNodes()) {
    $mouseMoveOutput.removeChild($mouseMoveOutput.firstChild);
  }
};

const App = () => {
  let controllClassTimer = null;
  let mouseMoveTimer = null;
  let mouseMoveData = {};

  $menuTitle.addEventListener("mouseover", () => {
    controllClassTimer = setTimeout(removeHideListClass, 1000);
  });

  $menuList.addEventListener("mousemove", (e) => {
    if (mouseMoveTimer) {
      clearTimeout(mouseMoveTimer);
    }

    mouseMoveTimer = setTimeout(() => {
      const listItem = e.target;
      const key = getListItemTxt(listItem);

      if (key !== undefined) {
        eraseOutput();
        recordMouseMoveData(mouseMoveData, key);
      }
      renderOutput(mouseMoveData);
    }, 500);
  });

  $menuContainer.addEventListener("mouseleave", () => {
    if (classList.contains("hide-list")) {
      clearTimeout(controllClassTimer);
    } else {
      addHideListClass();
      eraseOutput();
      mouseMoveData = {};
    }
  });
};

App();
