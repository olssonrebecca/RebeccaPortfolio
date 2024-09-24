<script setup>
    import LinkedInIcon from '../icons/IconLinkedIn.vue';
    import ContactIcon from '../icons/IconContact.vue';
    import DownloadIcon from '../icons/IconDownload.vue';
</script>
<template>
    <div class="footer">
        <div class="footer-content">
            <p>Designed and developed by Rebecca Olsson</p>

            <a href="https://storyset.com/work">Work illustrations by Storyset</a>

        </div>
        <div class="contact">
            <a href="https://www.linkedin.com/in/rebecca-olsson/" target="_blank" class="contact-icons" data-title="Visit Linked In"><LinkedInIcon /></a>
            <a href="mailto:olsson_rebecca@outlook.com" class="contact-icons" data-title="Send E-mail"><ContactIcon /></a>            
            <a href="../../../public/CV.pdf" class="contact-icons" download="CV_Rebecca_Olsson" data-title="Download resume"><DownloadIcon /></a>
        </div>
    </div>
</template>

<style src="./Footer.scss"></style>