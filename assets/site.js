const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
