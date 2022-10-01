const image = document.querySelector(".target-image");
const coordinates = document.querySelector("#coordinates");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

window.addEventListener("mousemove", (event) => {
  coordinates.innerHTML = `${event.clientX}px, ${event.clientY}px`;
  coordinates.style.top = `${event.clientY}px`;
  coordinates.style.left = `${event.clientX}px`;

  image.style.margin = `${event.clientY}px 0 0 ${event.clientX}px`;

  horizontal.style.top = `${event.clientY}px`;
  vertical.style.left = `${event.clientX}px`;
});
