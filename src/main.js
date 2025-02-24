import { createApp } from 'vue'
import Particles from "vue3-particles"
import App from './App.vue'
import router from './router'
import './assets/main.scss'

const app = createApp(App)
app.use(router)
app.use(Particles)
app.mount('#app')

//Collapse hamburger menu on click
$('.nav-link').on('click', function () {
    $('.navbar-toggler').click();
});


//responsive navbar
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLi = document.querySelectorAll('header nav div ul li a');
    var current = "";
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 1) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

//dont show hashtags in url
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

//Text animation
let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
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

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute("data-rotate");
        let period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};