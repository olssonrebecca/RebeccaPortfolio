<script setup>
    import ToolItem from '../ItemTool/ItemTool.vue';  // Import the new ItemTool component
    import SassIcon from '../icons/IconSass.vue';
    import GithubIcon from '../icons/IconGithub.vue';

    const tools = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', name: 'HTML' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name: 'CSS' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', name: 'Vue' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', name: 'Sass' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg', name: 'Webpack' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', name: 'JQuery' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', name: 'C#' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', name: '.NET' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', name: 'PHP' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', name: 'NodeJS' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', name: 'MySQL' },
        { src: '/images/Optimizely_Logo.png', name: 'Optimizely' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg', name: 'WordPress' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', name: 'Dart' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', name: 'Flutter' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', name: 'Postman' },
        { component: GithubIcon, name: 'Github' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', name: 'Git' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', name: 'Cloudflare' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', name: 'Jira' },
        { src: '/images/siteimprove.png', name: 'SiteImprove' },
        
    ];
</script>

<template>
    <div class="tools-component">
        <h1>Tools <span class="pink-text">&</span> Technologies</h1>
        <div class="tool-table">
            <ToolItem v-for="(tool, index) in tools" :key="index" :tool="tool" />
        </div>
    </div>
</template>
