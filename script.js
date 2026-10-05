document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".link-button");

  buttons.forEach((button) => {
    button.addEventListener("pointerenter", () => {
      button.style.transform = "translateY(-1px)";
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "translateY(0)";
    });
  });
});
