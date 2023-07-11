const projects = [
  {
    title: "Pupper palette",
    image: "../assets/images/beagle.png",
    description: "This is the first project.",
    liveLink: "https://pupper-d9d8b.web.app/",
    codeLink: "https://github.com/username/project1",
  },
  {
    title: "I made a promise",
    image: "../assets/images/IMadeAPromise.png",
    description: "This is the second project.",
    liveLink: "",
    codeLink: "https://github.com/username/project2",
  },
  {
    title: "Wiz Sort",
    image: "../assets/images/WizSort.png",
    description: "This is the second project.",
    liveLink: "https://live-link-2.com",
    codeLink: "https://github.com/username/project2",
  },
  {
    title: "4",
    image: "assets/images/project2.png",
    description: "This is the second project.",
    liveLink: "https://live-link-2.com",
    codeLink: "https://github.com/username/project2",
  },
  {
    title: "5",
    image: "assets/images/project2.png",
    description: "This is the second project.",
    liveLink: "https://live-link-2.com",
    codeLink: "https://github.com/username/project2",
  },
];

class Carousel {
  constructor(projects, carouselElement, nextButton, prevButton) {
    this.projects = projects;
    this.carouselElement = carouselElement;
    this.nextButton = nextButton;
    this.prevButton = prevButton;
    this.currentIndex = 0;

    this.updateCarousel();

    this.nextButton.addEventListener("click", () => this.nextProject());
    this.prevButton.addEventListener("click", () => this.prevProject());
  }

  createCardHTML(project) {
    return `
            <div class="carousel__card">
                <img src="${project.image}" alt="${project.title}">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
                <div class="actions">
                    <a target="_blank" href="${project.liveLink}"><button>Live</button></a>
                    <a target="_blank" href="${project.codeLink}"><button>Code</button></a>
                </div>
            </div>
        `;
  }

  updateCarousel() {
    console.log(this.currentIndex, this.projects[this.currentIndex]);
    let newCardHTML = this.createCardHTML(this.projects[this.currentIndex]);
    this.carouselElement.innerHTML = newCardHTML; // Replace the current card with the new one
  }

  nextProject() {
    // Advance to the next project, if there is one

    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prevProject() {
    // Go back to the previous project, if there is one
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }
}

window.onload = function () {
  const carouselElement = document.querySelector(".carousel");
  const nextButton = document.querySelector(".nextButton");
  const prevButton = document.querySelector(".prevButton");

  new Carousel(projects, carouselElement, nextButton, prevButton);
};
