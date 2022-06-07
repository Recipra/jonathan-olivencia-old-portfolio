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
