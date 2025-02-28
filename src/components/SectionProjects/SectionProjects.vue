<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import ProjectItem from '../ItemProject/ItemProject.vue'; // Import Project Item

    // Data for the projects
    const projects = [
        {
            imgSrc: '/images/smtm.jpg',
            title: 'SMTM',
            techs: 'Optimizely, CookieBot, Accessibility',
            description: 'Development and management of a multisite consisting of five websites, another external site, and their internal site. Strong focus on accessibility and content management. Added Cookiebot to all sites.',
            link: 'https://www.smtm.se/',
            linkText: 'Access to 5 sites'
        },
        {
            imgSrc: '/images/vaderstad.jpg',
            title: "Vaderstad",
            techs: 'Optimizely, JavaScript, Vue, Microsoft SQL',
            description: 'Added the Country Selector to change language of site, built in Vue with JavaScript and the CMS Optimizely. Built a user interface for push notifications to their app where user groups could be chosen. Built in Vue with Microsoft SQL. Added Cookiebot.',
            link: 'https://www.vaderstad.com/ca-en/',
            linkText: 'Visit site'
        },
        {
            imgSrc: '/images/ekn.jpg',
            title: 'EKN',
            techs: 'Optimizely, HTML, Sass',
            description: 'Development and management of the website. Developed a new campaign page in Sass and HTML with content from Optimizely. Required good communication with the customers regarding content and deployment.',
            link: 'https://www.ekn.se/en/',
            linkText: 'Visit site'
        },
        {
            imgSrc: '/images/dukaten.jpg',
            title: 'Dukaten',
            techs: 'Vue, Microsoft SQL',
            description: 'Built a user interface in Vue where the app owner could sign in to schedule, post and delete push notifications to their app. Data were stored in Microsoft SQL.',
        },
        {
            imgSrc: '/images/cambio.jpg',
            title: 'Master thesis',
            techs: 'Flutter, Dart, Figma',
            description: 'App development in Flutter and Dart for the mobile application My Health. A user interface for patients to collect their health data was developed and presented with data from the electronic health record. Master Thesis performed at Cambio Healthcare Systems AB.',
            link: 'MasterThesisCambio.pdf',
            linkText: 'View thesis'
        },
        {
            imgSrc: '/images/refood.jpg',
            title: 'Webprogramming Course Project',
            techs: 'MongoDB, API, Vue',
            description: 'Website project including sign-in and user storage in MongoDB. By providing ingredients in an input field, recipes from a Spoonacular API are generated.',
            link: 'https://www.youtube.com/watch?v=PnFSYT9bUxg',
            linkText: 'View screencast'
        }
    ];

    // Reactive variable for itemsToShow
    const itemsToShow = ref(2);
    const dir = ref("");
    const mouseDrag = ref(true);
    // Function to update itemsToShow based on screen width
    const updateItemsToShow = () => {
        const width = window.innerWidth;
        if (width < 640) {
            dir.value = 'ttb';
            itemsToShow.value = 1; // Show 1 item on small screens (mobile)
        }
        else if (width < 1100) {
            dir.value = '';
            itemsToShow.value = 1; // Show 1 item on small screens (mobile)
        }
        else {
            dir.value = '';
            itemsToShow.value = 2; // Show 2.5 items on larger screens (desktop)
        }
    }

    // Update the value when the component is mounted
    onMounted(() => {
        updateItemsToShow(); // Initial check for screen size
        window.addEventListener('resize', updateItemsToShow); // Listen for window resize
    })

    // Clean up the event listener when the component is unmounted
    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateItemsToShow);
    })

    // Define the carousel config, dynamically using itemsToShow
    const carouselConfig = ref({
        dir,
        touchDrag: false,
        itemsToShow,
        wrapAround: true,
        activeIndex: 0,
        startIndex: 0,
        gap: 20,
    });

</script>

<template>
    <div class="project-section">
        <h1>My <span class="turqoise-text">projects</span></h1>
        <div class="project-table">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="(project, index) in projects" :key="index">
                    <div class="carousel__item">
                        <ProjectItem :imgSrc="project.imgSrc"
                                     :title="project.title"
                                     :techs="project.techs"
                                     :description="project.description"
                                     :link="project.link"
                                     :linkText="project.linkText" />
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>
