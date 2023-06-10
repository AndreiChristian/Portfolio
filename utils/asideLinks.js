const sections = document.querySelectorAll("section");
const asideLinks = document.querySelectorAll("aside a");

const asideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const asideLink = document.querySelector(`aside a[href="#${id}"]`);

      if (entry.isIntersecting) {
        asideLink.classList.add("active");
      } else {
        asideLink.classList.remove("active");
      }
    });
  },
  { threshold: 1 }
);

sections.forEach((section) => {
  asideObserver.observe(section);
});
