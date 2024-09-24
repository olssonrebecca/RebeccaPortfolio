<template>
        <Particles id="tsparticles" :options="options" :particlesInit="particlesInit"/>
</template>

<script lang="ts">
    import type { Engine } from "tsparticles-engine";
    import { loadSlim } from "tsparticles-slim"; 
   
    export default {
        data() {
            return {              
                options: {                 
                    fullScreen: {
                        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                    },
                    interactivity: {
                        events: {                          
                                onclick: {
                                    enable: true,
                                    mode: "push",
                                },                            
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            }
                        },
                    },
                           particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
                },
            };
        },
        methods: {
            async particlesInit(engine: Engine) {
                await loadSlim(engine);
            },
        },
    };
</script>