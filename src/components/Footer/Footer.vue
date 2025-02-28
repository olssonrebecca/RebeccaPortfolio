<script setup>
    import LinkedInIcon from '../icons/IconLinkedIn.vue';
    import ContactIcon from '../icons/IconContact.vue';
    import DownloadIcon from '../icons/IconDownload.vue';
    import GitHubIcon from '../icons/IconGithub.vue';
    import FooterLink from '../ItemFooterLink/ItemFooterLink.vue';
</script>
<template>
        <div class="footer">
            <div class="footer-content">
                <p>Designed and developed by Rebecca Olsson</p>
                <a href="https://storyset.com/work" target="_blank" rel="noopener noreferrer">Work illustrations by Storyset</a>
            </div>

            <div class="contact">
                <FooterLink href="https://www.linkedin.com/in/rebecca-olsson/"
                            title="Visit LinkedIn"
                            :iconComponent="LinkedInIcon" />
                <FooterLink href="https://github.com/olssonrebecca/RebeccaPortfolio/"
                            title="View code"
                            :iconComponent="GitHubIcon" />
                <FooterLink href="/Resume_Rebecca_Olsson.pdf"
                            title="Download Resume"
                            :iconComponent="DownloadIcon"
                            download="Resume_Rebecca_Olsson.pdf" />
                <FooterLink href="mailto:olsson_rebecca@outlook.com"
                            title="Send E-mail"
                            :iconComponent="ContactIcon" />


            </div>
        </div>
</template>