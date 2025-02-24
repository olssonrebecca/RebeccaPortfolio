<script setup>
    import { ref } from 'vue'
    import { NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuRoot, NavigationMenuTrigger, NavigationMenuViewport } from 'radix-vue'
    import { Icon } from '@iconify/vue'
    import LinkedInIcon from '../icons/IconLinkedIn.vue'
    import ContactIcon from '../icons/IconContact.vue'
    import DownloadIcon from '../icons/IconDownload.vue'
    import PhoneIcon from '../icons/IconPhone.vue'
    import GitHubIcon from '../icons/IconGithub.vue';
    import ItemNavBarContactLink from '../ItemNavBarContactLink/ItemNavBarContactLink.vue'

    const currentTrigger = ref('')
</script>

<template>
    <NavigationMenuRoot v-model="currentTrigger" class="NavigationMenuRoot">
        <NavigationMenuList class="NavigationMenuList">
            <NavigationMenuItem>
                <NavigationMenuTrigger class="NavigationMenuTrigger">
                    Connect!
                    <Icon icon="radix-icons:caret-down" class="CaretDown" />
                </NavigationMenuTrigger>
                <NavigationMenuContent class="NavigationMenuContent">
                    <ul class="List one">
                        <li :style="{ gridRow: 'span 4' }">
                            <NavigationMenuLink as-child>
                                <div class="Callout" href="/">
                                    <img src="/images/Rebecca.jpg">
                                    <h1 class="CalloutHeading">Rebecca Olsson</h1>
                                    <p class="CalloutText">I am a social and organized Web Developer with a passion for teamwork and building sustainable and beautiful websites.</p>
                                </div>
                            </NavigationMenuLink>
                        </li>

                        <div class="NavigationMenuLinkColumn">
                            <ItemNavBarContactLink href="https://www.linkedin.com/in/rebecca-olsson/" target="_blanc" title="Linked In">
                                <LinkedInIcon /> Visit my Linked In.
                            </ItemNavBarContactLink>
                            <ItemNavBarContactLink href="/Resume_Rebecca_Olsson.pdf" download="Resume_Rebecca_Olsson.pdf" title="Resume">
                                <DownloadIcon /> Download my resume!
                            </ItemNavBarContactLink>
                            <ItemNavBarContactLink href="https://github.com/olssonrebecca/RebeccaPortfolio/" target="_blanc" title="GitHub">
                                <GitHubIcon /> Check out my code.
                            </ItemNavBarContactLink>
                            <ItemNavBarContactLink href="mailto:olsson_rebecca@outlook.com" title="Email">
                                <ContactIcon /> Olsson_Rebecca@outlook.com
                            </ItemNavBarContactLink>
                            <ItemNavBarContactLink title="Phone">
                                <PhoneIcon /> +1778-793 83 93
                            </ItemNavBarContactLink>
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
</template>


