import { createApp } from 'vue'
import Particles from "vue3-particles"
import App from './App.vue'
import router from './router'
import './assets/main.scss'

const app = createApp(App)
app.use(router)
app.use(Particles)
app.mount('#app')

// Collapse hamburger menu on click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-toggler').click();
    });
});

document.addEventListener('click', (event) => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if the clicked element is outside the navbar menu or toggler
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        // If the menu is open, close it
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});

// Handle sticky navbar and active links on scroll
const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav div ul li a');
    let currentSection = "";
    const navbar = document.querySelector("nav");

    // Add sticky class to navbar on scroll
    navbar.classList.toggle("sticky", window.scrollY > 0);

    // Determine which section is currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 1) {
            currentSection = section.getAttribute("id");
        }
    });

    // Highlight the active link based on scroll position
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(currentSection)) {
            link.classList.add("active");
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Prevent hashtags from showing in the URL
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

// Text animation (typing effect)
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        this.txt = this.isDeleting
            ? fullTxt.substring(0, this.txt.length - 1)
            : fullTxt.substring(0, this.txt.length + 1);

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 300 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

// Initialize text animation when the page loads
window.addEventListener('load', () => {
    document.querySelectorAll('.txt-rotate').forEach(el => {
        const toRotate = JSON.parse(el.getAttribute('data-rotate'));
        const period = el.getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(el, toRotate, period);
        }
    });
});
