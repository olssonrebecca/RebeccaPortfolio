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
    My name is Rebecca Olsson. I’m 30 years old and originally from Sweden.<br />
    I fell in love with coding while studying for my M.Sc. in Biomedical Engineering. <br />
    After graduating, I began my career as an IT Consultant in Web Development at 
    <a href="https://www.knowit.eu/" target="_blank" rel="noopener noreferrer">Knowit</a>. <br />
    Combining my technical skills with my social strengths is something I find very motivating.
                  <br /><br />
    In the fall of 2022, I moved to Canada. After spending time securing my Permanent Residence, I began working as a 
    Web Developer & Digital Marketing Specialist for Gibbons Whistler, where I independently maintain 7 websites.
                 <br /><br />
    Outside of work, I love outdoor activities such as skiing, downhill biking, hiking, and camping. I also enjoy concerts (especially indie and rock), game nights with friends, and baking!
  </p>

        </div>
        <div class="facts-box">
            <h2>Quick facts</h2>
            <ul>
                <li><CodeIcon />IT Consultant, Web Developer</li>
                <li><BookIcon />M.sc. in Biomedical Engineering</li>
                <li><FlagIcon />Swedish Citizen, Canadian PR</li>
                <li><AboutIcon />Structured, Reliable, Outgoing</li>
                <li><HeartIcon />Coding, client contact, teamwork</li>
                <li> <GeotagIcon />Whistler, Canada</li>
                <li><BirthdayIcon />30 y/o</li>
                <!-- <li><FlagIcon />Swedish</li>-->
            </ul>
        </div>
    </div>
</template>