<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let cursor: HTMLDivElement;
  let cursorDot: HTMLDivElement;
  let isHovering = false;
  let isMobile = window.innerWidth < 768;

  const pcConfig = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1200
        }
      },
      color: {
        value: ['#ffffff', '#2dd4bf', '#818cf8', '#c084fc', '#22d3ee']
      },
      shape: {
        type: ['circle', 'triangle', 'star'],
        stroke: {
          width: 1,
          color: '#ffffff',
          opacity: 0.3
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05,
          color: '#818cf8'
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 1200,
          rotateY: 1500
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: ['grab', 'bubble', 'connect']
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8
          }
        },
        bubble: {
          distance: 250,
          size: 6,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        connect: {
          distance: 100,
          radius: 150,
          links: {
            opacity: 0.3
          }
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    background: {
      color: 'transparent'
    }
  };

  const mobileConfig = {
    ...pcConfig,
    particles: {
      ...pcConfig.particles,
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.3,
          sync: false
        }
      },
      move: {
        speed: 1.5,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 800
        }
      }
    },
    interactivity: {
      ...pcConfig.interactivity,
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: ['bubble', 'connect']
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        ...pcConfig.interactivity.modes,
        bubble: {
          distance: 150,
          size: 4,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        connect: {
          distance: 80,
          radius: 120,
          links: {
            opacity: 0.3
          }
        }
      }
    }
  };

  function initParticles() {
    isMobile = window.innerWidth < 768;
    const config = isMobile ? mobileConfig : pcConfig;
    // @ts-ignore
    window.particlesJS('particles-js', config);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isMobile) {
      const { clientX, clientY } = event;
      const scale = isHovering ? 1.5 : 1;
      const dotScale = isHovering ? 0.5 : 1;
      cursor.style.transform = `translate(${clientX}px, ${clientY}px) scale(${scale})`;
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px) scale(${dotScale})`;
    }
  }

  function handleMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.matches('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')) {
      isHovering = true;
      cursor?.classList.add('hover');
      cursorDot?.classList.add('hover');
    }
  }

  function handleMouseLeave() {
    isHovering = false;
    cursor?.classList.remove('hover');
    cursorDot?.classList.remove('hover');
  }

  onMount(() => {
    initParticles();
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseEnter);
      document.addEventListener('mouseout', handleMouseLeave);
    }
    window.addEventListener('resize', () => {
      isMobile = window.innerWidth < 768;
      initParticles();
    });

    return () => {
      window.removeEventListener('resize', initParticles);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseEnter);
        document.removeEventListener('mouseout', handleMouseLeave);
      }
    };
  });
</script>

<div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
  <div id="particles-js" class="absolute inset-0 z-0 touch-none"></div>
  {#if !isMobile}
    <div bind:this={cursor} class="cursor">
      <div class="cursor-ring"></div>
    </div>
    <div bind:this={cursorDot} class="cursor-dot">
      <div class="dot"></div>
    </div>
  {/if}
  <div class="relative z-10">
    <slot />
  </div>
</div> 