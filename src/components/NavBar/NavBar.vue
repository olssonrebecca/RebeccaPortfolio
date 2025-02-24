<script setup>
    import HomeIcon from '../icons/IconHome.vue';
    import AboutIcon from '../icons/IconAbout.vue';
    import ServicesIcon from '../icons/IconServices.vue';
    import ToolsIcon from '../icons/IconTools.vue';
    import ProjectsIcon from '../icons/IconProjects.vue';
    import HamburgerIcon from '../icons/IconHamburger.vue';
    import ArrowIcon from '../icons/IconArrow.vue';
    import xIcon from '../icons/IconX.vue';
    import LinkedInIcon from '../icons/IconLinkedIn.vue';
    import ContactIcon from '../icons/IconContact.vue';
    import DownloadIcon from '../icons/IconDownload.vue';
    import PhoneIcon from '../icons/IconPhone.vue';

    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'
    import {
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuRoot,
        NavigationMenuTrigger,
        NavigationMenuViewport,
    } from 'radix-vue'

    import NavigationMenuListItem from '../ItemNavBar/ItemNavBar.vue'

    const currentTrigger = ref('')

    import { onMounted, onBeforeUnmount } from 'vue';

    onMounted(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        const handleScroll = () => {
            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((links) => {
                        links.classList.remove('active');
                        document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });
    });

</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-scroll">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <HamburgerIcon />
            </button>
     
            <NavigationMenuRoot v-model="currentTrigger"
                                class="NavigationMenuRoot">
                <NavigationMenuList class="NavigationMenuList">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger class="NavigationMenuTrigger">
                            Connect!
                            <Icon icon="radix-icons:caret-down"
                                  class="CaretDown" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent class="NavigationMenuContent">
                            <ul class="List one">
                                <li :style="{ gridRow: 'span 4' }">
                                    <NavigationMenuLink as-child>
                                        <div class="Callout"
                                             href="/">
                                            <img src="/images/Rebecca.jpg">
                                            <h1 class="CalloutHeading">Rebecca Olsson</h1>
                                            <p class="CalloutText">I am a social and organized Web Developer with a passion for teamwork and building sustainable and beautiful websites.</p>
                                        </div>
                                    </NavigationMenuLink>
                                </li>

                                <div class="NavigationMenuLinkColumn">
                                    <NavigationMenuListItem href="https://www.linkedin.com/in/rebecca-olsson/" target="_blanc"
                                                            title="Linked In">
                                        <LinkedInIcon /> Visit my Linked In.
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem href="mailto:olsson_rebecca@outlook.com"
                                                            title="Email">
                                        <ContactIcon /> Olsson_Rebecca@outlook.com
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem 
                                                            title="Phone">
                                        <PhoneIcon /> +1778-793 83 93
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem href="/Resume_Rebecca_Olsson.pdf"  download="Resume_Rebecca_Olsson.pdf"
                                                            title="Resume">
                                        <DownloadIcon />  Download my resume!
                                    </NavigationMenuListItem>
                                </div>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuIndicator class="NavigationMenuIndicator">
                        <div class="Arrow" />
                    </NavigationMenuIndicator>
                </NavigationMenuList>

                <div class="ViewportPosition">
                    <NavigationMenuViewport class="NavigationMenuViewport" />
                </div>
            </NavigationMenuRoot>

<div class="navigationLinks">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link home" href="#sectionStart">
                    <HomeIcon />Home <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link about" href="#sectionAbout">
                    <AboutIcon />About
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link services" href="#sectionServices">
                    <ServicesIcon />Services
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link tools" href="#sectionTools">
                    <ToolsIcon />Tools
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link project" href="#sectionProjects">
                    <ProjectsIcon /> Projects
                </a>
            </li>

        </ul>
    </div>
</div>
        </div>
</nav>
</template>