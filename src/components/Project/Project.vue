<script setup>
    import OpenIcon from '../icons/IconOpen.vue';
</script>
<template>
    <div class="project-container">
        <h1>My  <span class="purple-text">projects</span> </h1>
        <div class="project-table">
            <div class="project-item">
                <img src="/images/smtm.jpg" />
                <div class="project-text">
                    <h2>SMTM</h2>
                    <p>cookies, accessability, 5 sites</p>
                </div>
            </div>

            <div class="project-item">
                <img src="/images/ekn.jpg"/>
                <div class="project-text">
                    <h2>EKN</h2>
                    <div class="tech-row">
                        <span class="tech-box">Episerver</span>
                        <span class="tech-box">HTML</span>
                        <span class="tech-box">CSS</span>
                    </div>
                    <p>Development and management of the website. Main project was to develop a new campaign page which required good communication with the customers regarding content and deploy.   </p>
                    <a href="https://www.ekn.se/en/">Visit site<OpenIcon /></a>
                </div>

            </div>

            <div class="project-item">
              <img  src="/images/vaderstad.jpg" />
                <div class="project-text">
                    <h2>Väderstad</h2>
                    <div class="tech-row">
                        <span class="tech-box">Episerver</span>
                        <span class="tech-box">HTML</span>
                        <span class="tech-box">CSS</span><span class="tech-box">Microsoft SQL</span><span class="tech-box">Vue</span>
                    </div>
                    <p>Fokus på meddelandefunktionen pch landsväljaren </p>
                    <a href="https://www.vaderstad.com/ca-en/">Visit site<OpenIcon /></a>
                </div>

            </div>

            <div class="project-item">
                <!--<img  src="/images/dukaten.PNG"/>-->
                <div class="project-text">
                    <h2>Dukaten</h2>
                    <div class="tech-row">
                        <span class="tech-box">HTML</span>
                        <span class="tech-box">CSS</span><span class="tech-box">Microsoft SQL</span><span class="tech-box">Vue</span>
                    </div>
                    <p>Notifications. I built the userface from scratch for posting notifications to app. with date and time when they would be active.   </p>
                    <a href="https://www.vaderstad.com/ca-en/">Visit site<OpenIcon /></a>
                </div>

            </div>
            <div class="project-item">
                <!--<img src="../../../public/images/dukaten.PNG" />-->
                <div class="project-text">
                    <h2>Master thesis</h2>
                    <div class="tech-row">
                        <span class="tech-box">Flutter</span>
                        <span class="tech-box">Dart</span><span class="tech-box">Microsoft SQL</span><span class="tech-box">Vue</span>
                    </div>
                    <p>Added a function</p>
                    <a href="https://www.vaderstad.com/ca-en/">Visit site<OpenIcon /></a>
                </div>
            </div>
            <div class="project-item">
                <!--<img  src="/images/refood.png" />-->
                <div class="project-text">
                    <h2>Master thesis</h2>
                    <div class="tech-row">
                        <span class="tech-box">MongoDB</span>
                        <span class="tech-box">API</span><span class="tech-box">Vue</span>
                    </div>
                    <p>Added a function</p>
                    <a href="https://www.youtube.com/watch?v=PnFSYT9bUxg">Visit site<OpenIcon /></a>
                </div>
            </div>
        </div>
        </div>
</template>

<style src="./Project.scss"></style>
