<script setup>
    import { ref } from 'vue'
    import ItemNavBarContact from '../ItemNavBarContact/ItemNavBarContact.vue'
    import ItemNavBarLink from '../ItemNavBarLink/ItemNavBarLink.vue'
    import HomeIcon from '../icons/IconHome.vue';
    import AboutIcon from '../icons/IconAbout.vue';
    import ServicesIcon from '../icons/IconServices.vue';
    import ToolsIcon from '../icons/IconTools.vue';
    import ProjectsIcon from '../icons/IconProjects.vue';
    import HamburgerIcon from '../icons/IconHamburger.vue';
    import ArrowIcon from '../icons/IconArrow.vue';
    import xIcon from '../icons/IconX.vue';
    import ContactIcon from '../icons/IconContact.vue'

    import { onMounted, onBeforeUnmount } from 'vue'

    const currentTrigger = ref('')

    onMounted(() => {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('header nav a')

        const handleScroll = () => {
            sections.forEach((sec) => {
                const top = window.scrollY
                const offset = sec.offsetTop
                const height = sec.offsetHeight
                const id = sec.getAttribute('id')

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((links) => {
                        links.classList.remove('active')
                        document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active')
                    })
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll)
        })
    })
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-scroll">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <HamburgerIcon />
            </button>

            <ItemNavBarContact />

            <div class="navigationLinks">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <ItemNavBarLink label="Home" href="#sectionStart" :icon="HomeIcon" />
                        <ItemNavBarLink label="About" href="#sectionAbout" :icon="AboutIcon" />
                        <ItemNavBarLink label="Services" href="#sectionServices" :icon="ServicesIcon" />
                        <ItemNavBarLink label="Tools" href="#sectionTools" :icon="ToolsIcon" />
                        <ItemNavBarLink label="Projects" href="#sectionProjects" :icon="ProjectsIcon" />
                    <ItemNavBarLink label="Contact" href="#sectionContact" :icon="ContactIcon" />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>