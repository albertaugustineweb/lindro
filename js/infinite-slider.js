document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(
    ".tp-hero-slider-active .swiper-wrapper"
  );

  if (!wrapper) return;

  // duplicate slides for infinite effect
  wrapper.innerHTML += wrapper.innerHTML;
});
