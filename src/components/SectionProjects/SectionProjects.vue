<script setup>
    import ProjectItem from '../ItemProject/ItemProject.vue'; // Import Project Item 
</script>

<template>
    <div class="project-container">
        <h1>My <span class="turquoise-text">projects</span></h1>
        <div class="project-table">
            <ProjectItem imgSrc="/images/smtm.jpg"
                         title="SMTM"
                         techs="Optimizely, CookieBot, Accessibility"
                         description="Development and management of a multisite consisting of five websites, another external site, and their internal site. Strong focus on accessibility and content management. Added Cookiebot to all sites."
                         link="https://www.smtm.se/"
                         linkText="Visit SMTM to access all sites" />

            <ProjectItem imgSrc="/images/vaderstad.jpg"
                         title="V&auml;derstad"
                         techs="Optimizely, JavaScript, Vue, Microsoft SQL"
                         description="Added the Country Selector to change language of site, built in Vue with JavaScript and the CMS Optimizely. Built a user interface for push notifications to their app where user groups could be chosen. Built in Vue with Microsoft SQL. Added Cookiebot."
                         link="https://www.vaderstad.com/ca-en/"
                         linkText="Visit site" />

            <ProjectItem imgSrc="/images/ekn.jpg"
                         title="EKN"
                         techs="Optimizely, HTML, Sass"
                         description="Development and management of the website. Developed a new campaign page in Sass and HTML with content from Optimizely. Required good communication with the customers regarding content and deployment."
                         link="https://www.ekn.se/en/"
                         linkText="Visit site" />

            <ProjectItem imgSrc="/images/dukaten.jpg"
                         title="Dukaten"
                         techs="Vue, Microsoft SQL"
                         description="Built a user interface in Vue where the app owner could sign in to schedule, post and delete push notifications to their app. Data were stored in Microsoft SQL." />

            <ProjectItem imgSrc="/images/cambio.jpg"
                         title="Master thesis"
                         techs="Flutter, Dart, Figma"
                         description="App development in Flutter and Dart for the mobile application My Health. A user interface for patients to collect their health data was developed and presented with data from the electronic health record. Master Thesis performed at Cambio Healthcare Systems AB."
                         link="MasterThesisCambio.pdf"
                         linkText="View thesis" />

            <ProjectItem imgSrc="/images/refood.jpg"
                         title="Webprogramming Course Project"
                         techs="MongoDB, API, Vue"
                         description="Website project including sign-in and user storage in MongoDB. By providing ingredients in an input field, recipes from a Spoonacular API are generated."
                         link="https://www.youtube.com/watch?v=PnFSYT9bUxg"
                         linkText="View screencast" />
        </div>
    </div>
</template>