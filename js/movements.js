"use strict";

const instructions = {
  button1:
    "This button allows you to order a meal. It takes you a the Glovo web app to order your meal.",
  button2:
    "With this button, you have the luxury of opening the google search page in a new tab. Convenient right? I know.",
  button3:
    "Would you like to send an email? That is what this button helps you do. Open your mailing app with this button.",
  button4:
    "Want to open your gmail messages in a new tab? This button helps you achieve that. Opens the Google mail website in new tab",
  button5:
    "Hmm, you want to watch a few videos to assist you with your task? Youtube should have what you need. Use this button to go to the Youtube page.",
  button6:
    "Are you interested in the Github repository for this project? Use this button to navigate to the Github repository.",
};

const allButtons = document.querySelectorAll("button");
const modelWithTextContainer = document.querySelector(".modelContainer");
const descriptionText = document.querySelector(".description-text");

const moveModelContainer = (xPos, yPos, height) => {
  console.log(xPos, yPos, height);
  modelWithTextContainer.style.position = "absolute";
  modelWithTextContainer.style.top = `${yPos + height}px`;
  modelWithTextContainer.style.left = `${xPos}px`;
  modelWithTextContainer.style.bottom = `unset`;
  modelWithTextContainer.style.right = `unset`;
  //   modelWithTextContainer.getBoundingClientRect().x = xPos;
};

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const buttonId = e.target.dataset.id;
    descriptionText.textContent = instructions[`button${buttonId}`];

    const xPos = e.target.getBoundingClientRect().x;
    const yPos = e.target.getBoundingClientRect().y;
    const height = e.target.getBoundingClientRect().height;
    console.log(xPos, yPos, height);

    moveModelContainer(xPos, yPos, height);
    // modelWithTextContainer.style.display = "block";
  })
);
