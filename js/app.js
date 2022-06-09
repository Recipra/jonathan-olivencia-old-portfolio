import { projectData } from "./project-data.js"

const innerCarousel = document.getElementById('carousel-inner')

let projectCarousel = projectData.map(project => 
  `
    <div class="carousel-item active" class="d-block w-100" alt="tictactoe">
      <div class="carousel-image" style="background-image: url('${project.image}')"></div>
      <div class="carousel-caption d-none d-md-block">
        <h5>${project.title}</h5>
        <p>${project.description}</p>
        <div>
        <a class="project-links" href="${project.deployed}" target="_blank">Deployed</a>
        <a class="project-links" href="${project.github}" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  `
).join('')

innerCarousel.innerHTML = projectCarousel

const aboutButton = document.getElementById('about-button')
const contactButton = document.getElementById('contact-button')
const resumeButton = document.getElementById('resume-button')
const workButton = document.getElementById('work-button')
const linkedInLogo = document.getElementById('linkedin-logo')
const gitHubLogo = document.getElementById('github-logo')
const emailLogo = document.getElementById('email-logo')
const linkedInText = document.getElementById('linkedin-text')
const gitHubText = document.getElementById('github-text')
const emailText = document.getElementById('email-text')
const pageTitle = document.getElementById('page-title')
const titleBars = document.querySelectorAll('.title-bars')

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

linkedInLogo.onmouseover = function() {
  linkedInText.style.color = 'purple'
}

linkedInLogo.onmouseout = function() {
  linkedInText.style.color = 'transparent'
}

gitHubLogo.onmouseover = function() {
  gitHubText.style.color = 'purple'
}

gitHubLogo.onmouseout = function() {
  gitHubText.style.color = 'transparent'
}

emailLogo.onmouseover = function() {
  emailText.style.color = 'purple'
}

emailLogo.onmouseout = function() {
  emailText.style.color = 'transparent'
}

pageTitle.addEventListener('click', event => {
  titleBars.forEach(titleBar => {
    titleBar.className = 'css-selector title-bars'
  })
})