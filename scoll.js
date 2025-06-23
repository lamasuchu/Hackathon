const container = document.getElementById('scrollContainer');
  let scrollAmount = 0;
  const speed = 1;

  function autoScroll() {
    scrollAmount += speed;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }
    container.scrollTo({
      right: scrollAmount,
      behavior: 'smooth'
    });
    requestAnimationFrame(autoScroll);
  }

  requestAnimationFrame(autoScroll);
let isPaused = false;
container.addEventListener('mouseenter', () => isPaused = true);
container.addEventListener('mouseleave', () => isPaused = false);

function autoScroll() {
  if (!isPaused) {
    scrollAmount += speed;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
  requestAnimationFrame(autoScroll);
}
