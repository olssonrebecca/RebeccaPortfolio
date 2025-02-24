<script setup>
    import GeotagIcon from '../icons/IconGeotag.vue';
    import BookIcon from '../icons/IconBook.vue';
    import BirthdayIcon from '../icons/IconBirthday.vue';
    import FlagIcon from '../icons/IconFlag.vue';
    import AboutIcon from '../icons/IconAbout.vue';
    import HeartIcon from '../icons/IconHeart.vue';
    import CodeIcon from '../icons/IconCode.vue';
    import WorkIcon from '../icons/IconWork.vue';

</script>

<template>
    <div class="about-section">
        <div class="about-information">
            <h1>Let me  <span class="turqoise-text">introduce</span> myself</h1>
            <p>
                My name is Rebecca Olsson, I am 29 years old and come from Sweden.<br />
                I moved to Canada fall 2022 and I recently recieved my Permanent Residency.<br /><br />
                I fell in love with coding when I was studying to a M.Sc. in Biomedical Engineering.<br />When I graduated I started to work as an IT Consultant within Web development at <a href="https://www.knowit.eu/" target="_blank" rel="noopener noreferrer">Knowit</a>. <br />
                Combining my coding knowledge with my social skills is something I find very motivating.
                <br /><br />
                When I am not working I like to do outdoor activities such as skiing, downhill biking, hiking and camping.<br /> I'm also enjoying concerts (indie and rock), game nights with friends and baking!
            </p>
        </div>
        <div class="facts-box">
            <h2>Quick facts</h2>
            <ul>
                <li><CodeIcon />IT Consultant, Web Development</li>
                <li><BookIcon />M.sc. in Biomedical Engineering</li>
                <li><FlagIcon />Swedish Citizen, Canadian PR</li>
                <li><AboutIcon />Structured, Reliable, Outgoing</li>
                <li><HeartIcon />Coding, client contact, teamwork</li>
                <li> <GeotagIcon />Whistler, Canada</li>
                <li><BirthdayIcon />29 y/o</li>
                <!-- <li><FlagIcon />Swedish</li>-->
            </ul>
        </div>
    </div>
</template>