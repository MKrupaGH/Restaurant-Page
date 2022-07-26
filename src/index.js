import "./styles/main.scss";
import { pageload } from "./pageload";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");
console.log(tabs);
const tabContents = document.querySelectorAll("[data-tab-content]");
console.log(tabContents);

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  })
);

document.querySelector('[type="submit"]').addEventListener("click", () => {
  document.querySelector("form").reset();
});
