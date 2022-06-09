import { projectData } from "./project-data.js"

const innerCarousel = document.getElementById('carousel-inner')
console.log(projectData)

let projectCarousel = projectData.map(project => 
  `
    <div class="carousel-item active" class="d-block w-100" alt="tictactoe">
      <div class="carousel-image" style="background-image: url('${project.image}')"></div>
      <div class="carousel-caption d-none d-md-block">
        <h5>${project.title}</h5>
        <p>${project.description}</p>
      </div>
    </div>
  `
).join('')

innerCarousel.innerHTML = projectCarousel

const aboutButton = document.getElementById('about-button')
const contactButton = document.getElementById('contact-button')
const resumeButton = document.getElementById('resume-button')
const workButton = document.getElementById('work-button')

aboutButton.addEventListener('click', event => {
  scrollToSection(event)
})

contactButton.addEventListener('click', event => {
  scrollToSection(event)
})

resumeButton.addEventListener('click', event => {
  scrollToSection(event)
})

workButton.addEventListener('click', event => {
  scrollToSection(event)
})

function scrollToSection(event) {
  let elementId = event.target.id.replace('-button', '')
  document.getElementById(elementId).scrollIntoView(true)
}
