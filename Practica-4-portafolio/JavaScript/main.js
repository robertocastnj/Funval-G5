/* ---------------Dark mode button----------------------- */
const toggle = document.getElementById('themeToggle')
const html = document.documentElement

const storedTheme = localStorage.getItem('theme')

if (storedTheme === 'dark') {
  html.classList.add('dark')
  toggle.checked = true
} else if (storedTheme === 'light') {
  html.classList.remove('dark')
  toggle.checked = false
} else {
  /* Si no hay tema guardado, seguir la preferencia del sistema */
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  toggle.checked = prefersDark
  html.classList.toggle('dark', prefersDark)
}

/* Al hacer clic en el interruptor, cambia el tema y guarda preferencia */
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

/*----------------- Menu Button ---------------------------*/
let menuButton = document.querySelector('#btn_menu')
let menuoption = document.querySelector('#menuop')
let menucollapse = document.querySelector('#collapse')
let navmenu = document.querySelector('#navmenu')
menuButton.addEventListener('click', function () {
  if (menuoption.classList.contains('buttonShow')) {
    menuoption.classList.replace('buttonShow', 'buttonHide')
    menucollapse.classList.replace('buttonHide', 'buttonShow')
    navmenu.classList.replace('hidden', 'flex')
  } else {
    menuoption.classList.replace('buttonHide', 'buttonShow')
    menucollapse.classList.replace('buttonShow', 'buttonHide')
    navmenu.classList.replace('flex', 'hidden')
  }
})

/* ----------------------Contact Secticon----------------- */

let ContactSection = document.querySelector('#contact_section')
import { contact } from './contact.js'

contact.forEach((cnt) => {
  const cntElement = document.createElement('a')
  cntElement.className = 'h-full'
  cntElement.href = cnt.link
  cntElement.target = '_blank'
  cntElement.innerHTML = `
  <!-- Dark mode -->
        <img
          src="${cnt.image.light}"
          alt=""
          class="h-full object-cover dark:hidden"
        />
        <!-- Light mode -->
        <img
          src="${cnt.image.dark}"
          alt=""
          class="h-full hidden object-cover dark:block"
        />`

  ContactSection.appendChild(cntElement)
})

/* ------------------- Projects section ------------------------ */

import { projects } from './proyectos.js'
if (window.location.pathname.endsWith('projects.html')) {
  let projectsSection = document.querySelector('#projects_section')

  projects.forEach((project) => {
    const projectElement = document.createElement('div')
    projectElement.className =
      'w-full flex flex-col justify-center gap-2 border-b-2'
    projectElement.innerHTML = `<h3 class="text-right text-[0.8rem] font-bold sm:text-[1.3rem]">
              ${project.name}
            </h3>
            <div class="w-full flex items-center justify-end">
              <a
                href=${project.link}
                class="w-[50%]"
                target="_blank"
                ><img
                  src=${project.image}
                  alt=""
                  class="object-cover w-full"
              /></a>
            </div>
            <span class="text-right text-[0.7rem] sm:text-[1rem]"
              >${project.description}</span
            >`

    projectsSection.appendChild(projectElement)
  })
}

/* ----------------- skills section ----------------- */

import { skills } from './habilidades.js'

if (window.location.pathname.endsWith('about.html')) {
  let skillsSection = document.querySelector('#skills_section')
  skills.forEach((skill) => {
    const skillweight = skill.percentage > 100 ? 100 : skill.percentage

    const skillElement = document.createElement('div')
    skillElement.className = 'w-full flex flex-row items-center gap-4'
    skillElement.innerHTML = `
  
  <!-- Image dark -->
            <img
              src="${skill.image.light}"
              class="object-cover w-[10%] dark:hidden"
              alt=""
            />
            <!-- Image light -->
            <img
              src="${skill.image.dark}"
              class="object-cover hidden w-[10%] dark:block"
              alt=""
            />
            <!-- Indicator -->
            <div class="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-400">
              <div
                class="bg-gray-100 h-2.5 rounded-full dark:bg-gray-900"
                style="width: ${skillweight}%"
              ></div>
            </div>`

    skillsSection.appendChild(skillElement)
  })
}
