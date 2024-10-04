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
    <div class="about-component">
        <div class="information-section">
            <h1>Let me  <span class="turqoise-text">introduce</span> myself</h1>
            <p>
                My name is Rebecca Olsson, I am 29 years old and come from Sweden.<br />
                I fell in love with coding when I was studying to a M.Sc. in Biomedical Engineering. <br /> <br />When I graduated I started to work as an IT Consultant within Webdevelopment at <a href="https://www.knowit.eu/">Knowit</a>. <br />
                Combining my coding knowledge with my social skills is something I found very motivating.

                <br /><br />
                I moved to Canada two years ago and I am currently employed as a Community Manager at <a href="https://www.barbermedia.ca/">Barber Media</a> and <a href="https://www.appscanada.ca/">Canada's' Best Apps</a>.

                <br />
                <br />
                When I am not working I like to do outdoor activities such as skiing, downhill biking, hiking and camping. I'm also enjoying a good beer, game nights with friends and baking!

            </p>
        </div>
        <div class="facts-box">
            <h2>Quick facts</h2>
            <ul>
                <li><BookIcon />M.sc. in Biomedical Engineering</li>
                <li><CodeIcon />IT Consultant, Web Development</li>
                <li><WorkIcon />Community Manager</li>
                <li><AboutIcon />Structured, Reliable, Outgoing</li>
                <li><HeartIcon />Client contact, teamwork</li>
                <li> <GeotagIcon />Whistler</li>
                <!--<li><BirthdayIcon />29 y/o</li>
    <li><FlagIcon />Swedish</li>-->
            </ul>
        </div>
    </div>
</template>

<style src="./About.scss"></style>