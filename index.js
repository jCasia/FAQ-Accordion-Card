"use strict";

const accordionContent = document.querySelectorAll(".faq__accordion");

accordionContent.forEach((el, index) => {
  const header = el.querySelector(".faq__header");
  const headerHeading = el.querySelector(".faq__accordion-heading");
  const accordionAnswer = el.querySelector(".faq__accordion-text");
  const iconSwitch = el.querySelector(".icon");

  header.addEventListener("click", () => {
    el.classList.toggle("open");

    if (el.classList.contains("open")) {
      accordionAnswer.style.height = `${accordionAnswer.scrollHeight}px`;
      headerHeading.style.fontWeight = "700";
      headerHeading.style.color = "--color-very-dark-saturated-blue";
      iconSwitch.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      accordionAnswer.style.height = 0;
      headerHeading.style = "";
      iconSwitch.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    callbackCloseRest(index);
  });
});

//callback function using the index (eg. the index of the accordion that was clicked),
// loop through accordions and if any of them does not equal to the index of the accordion that was clicked,
// remove class "open" and update the styles.
function callbackCloseRest(index) {
  accordionContent.forEach((accordion, index2) => {
    if (index !== index2) {
      accordion.classList.remove("open");

      const accordionAnswer2 = accordion.querySelector(".faq__accordion-text");
      const headerHeading2 = accordion.querySelector(".faq__accordion-heading");
      const iconSwitch2 = accordion.querySelector(".icon");

      headerHeading2.style = "";
      accordionAnswer2.style.height = 0;
      iconSwitch2.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
}
