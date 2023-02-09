"use strict";

const accordionContent = document.querySelectorAll(".faq__accordion");

accordionContent.forEach((el) => {
  const header = el.querySelector(".faq__header");
  header.addEventListener("click", () => {
    el.classList.toggle("open");

    const headerHeading = el.querySelector(".faq__accordion-heading");
    const answer = el.querySelector(".faq__accordion-text");
    const iconSwitch = el.querySelector(".icon");

    if (el.classList.contains("open")) {
      answer.style.height = `${answer.scrollHeight}px`;

      headerHeading.style.fontWeight = "700";
      headerHeading.style.color = "--color-very-dark-saturated-blue";
      iconSwitch.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      answer.style.height = 0;
      headerHeading.style = "";
      iconSwitch.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});
