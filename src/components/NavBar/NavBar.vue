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
    import './styles.scss'

    import NavigationMenuListItem from './NavigationMenuListItem.vue'

    const currentTrigger = ref('')



</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-scroll">
        <div class="container-fluid">
            <v-btn class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <HamburgerIcon />
            </v-btn>
     
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
                                        <LinkedInIcon /> You can find me on Linked In.
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem href="mailto:olsson_rebecca@outlook.com"
                                                            title="Email">
                                        <ContactIcon /> Olsson_Rebecca@outlook.com
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem 
                                                            title="Phone">
                                        <PhoneIcon /> 778-793 83 93
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
                <a class="nav-link home" href="#home">
                    <HomeIcon />Home <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link about" href="#about">
                    <AboutIcon />About
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link services" href="#services">
                    <ServicesIcon />Services
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link tools" href="#tools">
                    <ToolsIcon />Tools
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link project" href="#project">
                    <ProjectsIcon /> Projects
                </a>
            </li>

        </ul>
    </div>
</div>
        </div>
</nav>
</template>

<style src="./NavBar.scss"></style>