// Start at the bottom
window.onload = function () {
  // Desativa a restauração automática de rolagem e força a rolagem para o final
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // Desativa o comportamento padrão do navegador
  }

  // Força o scroll para o final da página
  //window.scrollTo(0, document.body.scrollHeight);

  // Inicia a animação da GIF
  start();
};

// GSAP Code
function start() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

// Section one

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-one .gif",
  {
    y: "100%", // Inicialmente no fundo da página
  },
  {
    y: "1600px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-one .gif-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      smooth: 1
      //markers: true,
    },
  }
);

// Fading animation for the GIF
gsap.to(".section-one .gif", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section-one .gif",
    start: "top 100px",
    end: "100px",
    scrub: true,
    //markers: true,
  },
});

// Section two - Scroll horizontally

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-two .horizontal-container",
  {
    y: "0px", x: "-500vw", // Inicialmente no fundo da página
  },
  {
    y: "500vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      smooth: 1
      //markers: true,
    },
  }
);

// Move WALKING Luisa1
gsap.fromTo(
  ".section-two .luisa1",
  {
    left: "600vw", // Inicialmente no fundo da página
  },
  {
    left: "-500px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa2
gsap.fromTo(
  ".section-two .luisa2",
  {
    left: "calc(600vw - 100vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-500px - 100vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa3
gsap.fromTo(
  ".section-two .luisa3",
  {
    left: "calc(600vw - 200vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-500px - 200vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa4
gsap.fromTo(
  ".section-two .luisa4",
  {
    left: "calc(600vw - 300vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-500px - 300vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa5
gsap.fromTo(
  ".section-two .luisa5",
  {
    left: "calc(600vw - 400vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-500px - 400vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa6
gsap.fromTo(
  ".section-two .luisa6",
  {
    left: "calc(600vw - 500vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-500px - 500vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Section four - scroll horizontally

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-four .horizontal-container",
  {
    y: "0px", x: "-400vw", // Inicialmente no fundo da página
  },
  {
    y: "400vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa1
gsap.fromTo(
  ".section-four .luisa1",
  {
    left: "500vw", // Inicialmente no fundo da página
  },
  {
    left: "-400px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa2

gsap.fromTo(
  ".section-four .luisa2",
  {
    left: "calc(500vw - 100vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-400px - 100vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa3

gsap.fromTo(
  ".section-four .luisa3",
  {
    left: "calc(500vw - 200vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-400px - 200vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa4

gsap.fromTo(
  ".section-four .luisa4",
  {
    left: "calc(500vw - 300vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-400px - 300vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING Luisa5

gsap.fromTo(
  ".section-four .luisa5",
  {
    left: "calc(500vw - 400vw)", // Inicialmente no fundo da página
  },
  {
    left: "calc(-400px - 400vw)", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Section five

// Define the motion path (you can customize the path points)

  // Create a timeline to combine motion path and opacity
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-five .gif-container",
    start: "500px top",
    end: "2500px bottom",
    scrub: 1,
    //markers: true,
  }
});

// Add motion path animation
timeline1.to(".section-five .walker-1", {
  motionPath: {
    path: "#path-1",
    align: "#path-1",
    alignOrigin: [0.5, 0.5],
  },
  duration: 1
});


  // Create a timeline to combine motion path and opacity
const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-five .gif-container",
    start: "top top",
    end: "1500px bottom",
    scrub: 1,
    //markers: true,
  }
});

// Add motion path animation
timeline2.to(".section-five .walker-2", {
  motionPath: {
    path: "#path-2",
    align: "#path-2",
    alignOrigin: [0.5, 0.5],
  },
  duration: 1
});





