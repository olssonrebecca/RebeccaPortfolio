<script setup>
    import SassIcon from '../icons/IconSass.vue';
    import GithubIcon from '../icons/IconGithub.vue';
    import ItemContactLink from '../ItemContactLink/ItemContactLink.vue'
    import LinkedInIcon from '../icons/IconLinkedIn.vue'
    import ContactIcon from '../icons/IconContact.vue'
    import DownloadIcon from '../icons/IconDownload.vue'
    import PhoneIcon from '../icons/IconPhone.vue'
    import GitHubIcon from '../icons/IconGithub.vue';

</script>

<template>
    <div class="contact-section">
        <h1><span class="purple-text">Contact</span> me</h1>  
        <div class="contact-container">
            <div class="contact-details">
                <img src="/images/Rebecca.jpg">
                <div class="contact-links">
                    <ItemContactLink href="https://www.linkedin.com/in/rebecca-olsson/" target="_blanc">
                        <LinkedInIcon />
                    </ItemContactLink>
                    <ItemContactLink href="https://github.com/olssonrebecca/RebeccaPortfolio/" target="_blanc">
                        <GitHubIcon />
                    </ItemContactLink>
                    <ItemContactLink href="/Resume_Rebecca_Olsson.pdf" download="Resume_Rebecca_Olsson.pdf">
                        <DownloadIcon />
                    </ItemContactLink>

                    <ItemContactLink href="mailto:olsson_rebecca@outlook.com">
                        <ContactIcon />
                    </ItemContactLink>
                </div>
                </div>
            <!--<div class="contact-email">
                <p>Send an e-mail to olsson_rebecca@outlook.com</p>
          
            </div>-->
            </div>
    </div>
</template>
