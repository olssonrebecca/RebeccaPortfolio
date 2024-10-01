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
    <div class="service-component">
        <h1>The  <span class="purple-text">services</span> I provide</h1>
        <div class="information-section">
            <div class="service-item service-item-first">
                <h2>Development</h2>
                <p>Koda, främst front-end development för websites but I am eager to explore new fields.</p>
            </div>
            <div class="img-item">
                <img src="/images/team.png" />
            </div>
            <div class="service-item service-item-second">
                <h2>Leadership</h2>
                <p>
                    Ta med att jag varit med i GROW. Ser folks styrkor och framhäver ett team. Ett mål att få leda ett team. Har bra egenskaper för det och goda verktyg i bagaget.
                </p>
            </div>
        </div>


    </div>
</template>

<style src="./Services.scss"></style>