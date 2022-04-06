const images = document.querySelectorAll("img:not(.lcp)");

const lazyImageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      lazyImageObserver.unobserve(image);
    }
  });
});

images.forEach((entry) => {
  lazyImageObserver.observe(entry);
});

lazyImageObserver.observe(document.querySelector('iframe'))
