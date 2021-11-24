const $menuContainer = document.querySelector("#menu-container");
const $menuList = document.querySelector("#menu-list");
const classList = $menuList.classList

let timer = null;

const toggleMenuList = () => {
    classList.toggle("hide-list");
};

$menuContainer.addEventListener("mouseover", () => {
    timer = setTimeout(toggleMenuList, 1000);
});

$menuContainer.addEventListener("mouseleave", () => {
    if (classList.contains("hide-list")) {
        clearTimeout(timer);
    } else toggleMenuList();
});

