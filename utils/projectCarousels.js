const projects = [
  {
    title: "Pupper palette",
    image: "../assets/images/beagle.png",
    description:
      "Pupper Palette - an online store for digital art built with React.",
    liveLink: "https://pupper-d9d8b.web.app/",
    codeLink: "https://github.com/username/project1",
  },
  {
    title: "Pupper Rest",
    image: "../assets/images/pupperRest.png",
    description: "A lighweight REST API filled with canine data, built with Express and powered by a PostgreSQL",
    liveLink: "https://expressjs-postgres-production-f8f8.up.railway.app/",
    codeLink: "https://github.com/AndreiChristian/pupperRest",
  },
  {
    title: "I made a promise",
    image: "../assets/images/IMadeAPromise.png",
    description: "This is the second project.",
    liveLink: "https://andreichristian.github.io/IMadeAPromise/",
    codeLink: "https://github.com/AndreiChristian/IMadeAPromise",
  },
  {
    title: "Wiz Sort",
    image: "../assets/images/WizSort.png",
    description: "This is the second project.",
    liveLink: "https://sort-viz-portfolio.web.app/",
    codeLink: "https://github.com/AndreiChristian/sortViz",
  },
  {
    title: "LVX",
    image: "../assets/images/LVX.png",
    description:
      "LVX is a project in development for a luxury villa company with two Angular Apps, two React Native Apps, and a backend built with Node, Express, PostgreSQL, Websockets",

    codeLink: "https://github.com/AndreiChristian/ISH",
  },
  {
    title: "Chip Chirip",
    image: "../assets/images/chip.png",
    description: "Chip Chirip is a chat app in development that includes a Angular front end and Node, Express, Websockets and PostgreSQL backend ",
    // liveLink: "https://live-link-2.com",
    codeLink: "https://github.com/AndreiChristian/chipchirip_server",
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
                    ${
                      project.liveLink
                        ? `<a target="_blank" href="${project.liveLink}"><button>Live</button></a>`
                        : `<span></span>`
                    }
                    <a target="_blank" href="${
                      project.codeLink
                    }"><button>Code</button></a>
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
