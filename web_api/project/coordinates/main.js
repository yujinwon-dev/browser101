const image = document.querySelector('.target-image');
const coordinates = document.querySelector('.coordinates');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

// defer 옵션 사용 시 이미지가 준비되지 않아서 getBoundingClientRect() 호출해도 width, height가 0일 수 있음
// 따라서 모든 리소스가 준비된 뒤 아래 코드르 실행하도록 이벤트리스너를 추가
addEventListener('load', () => {
  const imageRect = image.getBoundingClientRect();
  const imageHalfWidth = imageRect.width / 2;

  window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    coordinates.innerHTML = `${x}px, ${y}px`;
    coordinates.style.transform = `translate(${x + 10}px, ${y + 10}px)`;

    // image.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    image.style.transform = `translate(${x - imageHalfWidth}px, ${
      y - imageHalfWidth
    }px)`;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
  });
});
