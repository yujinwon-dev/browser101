const image = document.querySelector(".target-image");
const coordinates = document.querySelector(".coordinates");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  coordinates.innerHTML = `${x}px, ${y}px`;
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;

  image.style.top = `${y}px`;
  image.style.left = `${x}px`;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
});
