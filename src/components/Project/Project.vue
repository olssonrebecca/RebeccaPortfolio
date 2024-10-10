<script setup>
    import OpenIcon from '../icons/IconOpen.vue';
</script>
<template>
    <div class="project-container">
        <h1>My  <span class="turqoise-text">projects</span> </h1>
        <div class="project-table">
            <div class="project-item">
                <img src="/images/smtm.jpg" />
                <div class="project-text">
                    <h2>SMTM</h2>
                    <div class="tech-row">
                        <span class="tech-box">Optimizely</span>
                        <span class="tech-box">CookieBot</span>
                        <span class="tech-box">Accessability</span>
                    </div>
                    <p>Development and management of a multisite consisting of five websites, another external site and their internal site. Strong focus on accessability and help with content management. Added Cookiebot to all sites.</p>
                    <a href="https://www.smtm.se/" target="_blank">Visit SMTM to access the other sites<OpenIcon /></a>
                </div>
            </div>

            <div class="project-item">
                <img src="/images/vaderstad.jpg" />
                <div class="project-text">
                    <h2>V&auml;derstad</h2>
                    <div class="tech-row">
                        <span class="tech-box">Optimizely</span>
                        <span class="tech-box">JavaScript</span>
                        <span class="tech-box">Vue</span>
                        <span class="tech-box">Microsoft SQL</span>
                    </div>
                    <p>
                        Added the Country Selector to change language of site, built in Vue with JavaScript and the CMS Episerver.
                        Built a user interface for push notifications to their app where user groups could be chosen. Built in Vue with Microsoft SQL.
                        Added Cookiebot.
                    </p>
                    <a href="https://www.vaderstad.com/ca-en/" target="_blank">Visit site<OpenIcon /></a>
                </div>
            </div>

            <div class="project-item">
                <img src="/images/ekn.jpg" />
                <div class="project-text">
                    <h2>EKN</h2>
                    <div class="tech-row">
                        <span class="tech-box">Optimizely</span>
                        <span class="tech-box">HTML</span>
                        <span class="tech-box">Sass</span>
                    </div>
                    <p>Development and management of the website. Developed a new campaign page in Sass and HTML with content from Optimizely. Required good communication with the customers regarding content and deploy.</p>
                    <a href="https://www.ekn.se/en/" target="_blank">Visit site<OpenIcon /></a>
                </div>

            </div>



            <div class="project-item">
                <img src="/images/dukaten.jpg" />
                <div class="project-text">
                    <h2>Dukaten</h2>
                    <div class="tech-row">
                        <span class="tech-box">Vue</span>
                        <span class="tech-box">Microsoft SQL</span>
                    </div>
                    <p>I built a user interface in Vue where the app owner could sign in to schedule, post and delete push notifications to their app. Data were stored in Microsoft SQL. </p>
                </div>

            </div>
            <div class="project-item">
                <img src="/images/cambio.jpg" />
                <div class="project-text">
                    <h2>Master thesis</h2>
                    <div class="tech-row">
                        <span class="tech-box">Flutter</span>
                        <span class="tech-box">Dart</span><span class="tech-box">Figma</span>
                    </div>
                    <p>
                        App development in Flutter and Dart for the mobile application My Health. A user interface for patients to collect their health data was developed and presented with data from the electronic health record. Master Thesis performed at Cambio Healthcare Systems AB.
                    </p>
                    <a href="MasterThesisCambio.pdf" target="_blank">View thesis<OpenIcon /></a>
                </div>
            </div>
            <div class="project-item">
                <img src="/images/refood.jpg" />
                <div class="project-text">
                    <h2>Webprogramming Course Project</h2>
                    <div class="tech-row">
                        <span class="tech-box">MongoDB</span>
                        <span class="tech-box">API</span><span class="tech-box">Vue</span>
                    </div>
                    <p>Website project including sign in and user storage in MongoDB. By providing ingridients in an input field, recepies from a Spoonacular API are generated. </p>
                    <a href="https://www.youtube.com/watch?v=PnFSYT9bUxg" target="_blank">View screen cast<OpenIcon /></a>
                </div>
            </div>
        </div>
        </div>
</template>

<style src="./Project.scss"></style>
