<script setup> 
    import GeotagIcon from '../icons/IconGeotag.vue';
    import BookIcon from '../icons/IconBook.vue';
    import BirthdayIcon from '../icons/IconBirthday.vue';
    import FlagIcon from '../icons/IconFlag.vue';
    import AboutIcon from '../icons/IconAbout.vue';
    import HeartIcon from '../icons/IconHeart.vue';
    import CodeIcon from '../icons/IconCode.vue';

</script>

<template>
    <div class="about-component">
        <div class="information-section">
            <h1>Let me  <span class="turqoise-text">introduce</span> myself</h1>
            <p>My name is Rebecca Olsson, I am 29 years old and from Sweden.
               I fell in love with coding when I was studying to a M.Sc. in Biomedical Engineering. When I graduated I started to work as an IT Consultant within webdevelopment at <a href="https://www.knowit.eu/">Knowit</a>. Combining my coding knowledge with my social skills was something I really liked. I worked as a Full-stack Developer and I noticably developed my coding skills while working within the CMS system Episerver and technologies such as HTML, CSS, Vue, JavaScript, C# .Net and Microsoft SQL database. 


                My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.



                I am currently employed as a part-time Community Manager at <a href="https://www.barbermedia.ca/">Barber Media</a> and <a href="https://www.appscanada.ca/">Canada's' Best Apps</a>


                Att jag är en frontendutveckling. Det jag gillar med IT är att få skapa och arbeta nära med andra team-medlemmar.
                Är en lagspelare.

                Mitt framtida mål är att arbeta som en kodande projektledare.

                VAD JAG KAN BIDRA MED:<br />
                Social förmåga som gör att jag kan kommunicera väl inom teamet men även till kunder.
                Organiserad som ser vad som måste göras och tar initiativ.
                Reliable- gör det som bör göras och varnar i tid om ett projekt behöver mer tid/hjälp.

                My Feelings when im coding: excitment, fun, interesting, willing to learn more.
            </p>
            <h2>Who I am outside of work</h2>
            <p>
                Whistler-baserad och gillar snowboard, skidor, touring, ALLLLT roligt man kan tänka sig.

                KANSKE NÅGRA BILDER
            </p>
        </div>
        <div class="facts-box">
            <h2>Quick facts</h2>
            <ul>
                <li><CodeIcon />IT Consultant, Web Development</li>
                <li><BookIcon />M.sc. in Biomedical Engineering</li>
                <li><AboutIcon />Structured, Reliable, Outgoing</li>
                <li><HeartIcon />Client contact, teamwork</li>
                <li><FlagIcon />Swedish</li>
                <li> <GeotagIcon />Whistler</li>
                <li><BirthdayIcon />29 y/o</li>
            </ul>
        </div>
    </div>
</template>

<style src="./About.scss"></style>