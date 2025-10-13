export default function stickyEffect() {
  const sticky = document.querySelector("[data-js-header]");
  const trigger = document.querySelector("[data-js-sticky-trigger]");
  if (!sticky || !trigger) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      sticky.classList.toggle('is-stuck', !entry.isIntersecting);
    },
    { threshold: [0] }
  );

  observer.observe(trigger);
}