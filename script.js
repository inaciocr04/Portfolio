const theme = document.getElementById("theme-button");
const icon = document.getElementById("theme-logo");
const nomTheme = document.getElementById("dark-light-mode");
const logo = document.getElementById("logo");
const logoFooter = document.getElementById("logo_footer");


theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "bi bi-brightness-high-fill";
    nomTheme.innerHTML = "Light mode";
    logo.src = "./image/Logo_Light.png";
    logoFooter.src = "./image/Logo_Light.png";
  } else {
    icon.className = "bi bi-moon-fill";
    nomTheme.innerHTML = "Dark mode";
    logo.src = "./image/Logo_Dark.png";
    logoFooter.src = "./image/Logo_Dark.png";
  }
};

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  toggleMenuIcon();
});

const links = document.querySelectorAll(".nav_links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-menu");
    toggleMenuIcon();
  });
});

function toggleMenuIcon() {
  const menuIcon = document.querySelector(".menu-hamburger");
  const isMobileMenuOpen = navLinks.classList.contains("mobile-menu");

  if (isMobileMenuOpen) {
    menuIcon.classList = "bi bi-x-lg menu-hamburger";
  } else {
    menuIcon.classList = "bi bi-list menu-hamburger";
  }
}

// animation

const bouton = document.querySelector(".btn");

bouton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//compétences

const onglets = document.querySelectorAll("#bouton");
const contenu = document.querySelectorAll(".type");

let index = 0;

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
    } else {
      onglet.classList.add("active");
    }

    index = onglet.getAttribute("data-anim");

    for (i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("active");
      }
    }

    for (j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute("data-anim") == index) {
        contenu[j].classList.add("active-contenu");
        gsap.from(contenu[j], {
          opacity: 0,
          y: -150,
          duration: 0.5,
          ease: "bounce.out",
        });
      } else {
        contenu[j].classList.remove("active-contenu");
      }
    }
  });
});

function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect();

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    //console.log(items);
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("apparait");
    } else {
      entry.target.classList.remove("apparait");
    }
  });
});

const leftElements = document.querySelectorAll(".gauche");
const rightElements = document.querySelectorAll(".droite");

leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));

var typingEffect = new Typed(".multitext", {
  strings: [
    "développeur front-end",
    "développeur back-end",
    "intrégrateur web",
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 80,
  backDelay: 1500,
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  gsap.to(mousemove, {
    scale: 0.5,
    x: "0%",
    y: "0%",
    duration: 0.3,
    ease: "power2.out",
  });
});

window.addEventListener("mouseup", () => {
  gsap.to(mousemove, {
    scale: 1,
    x: "0%",
    y: "0%",
    duration: 0.3,
    ease: "power2.out",
  });
});

const text = document.querySelectorAll("p, h1, h2, h3, h4, h5, li, a");

text.forEach((paragraph) => {
  paragraph.addEventListener("mouseenter", () => {
    gsap.to(mousemove, {
      scale: 2,
      duration: 0.3,
    });
  });

  paragraph.addEventListener("mouseleave", () => {
    gsap.to(mousemove, {
      scale: 1,
      duration: 0.3,
    });
  });
});

const plusCompetence = document.querySelector("#plus_competence");
const tousProjet = document.querySelector(".tous_projet");
const voirPlus = document.querySelector(".voirplus");

let animation;

plusCompetence.addEventListener("click", () => {
  if (tousProjet.classList.contains("overflow")) {
    tousProjet.style.height = "100%";
    tousProjet.classList.remove("overflow");
    plusCompetence.innerHTML = "Voir moins";
  } else {
    tousProjet.style.height = "450px";
    tousProjet.classList.add("overflow");
    plusCompetence.innerHTML = "Voir plus";
  }
});

const bounceAnimation = () => {
  let jumpHeight = window.innerWidth < 600 ? 5 : 10;

  animation = gsap.fromTo(
    voirPlus,
    {
      y: jumpHeight,
      scale: 1,
    },
    {
      y: -jumpHeight,
      scale: 1.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    }
  );
};

voirPlus.addEventListener("mouseenter", () => {
  if (animation) {
    animation.pause();
  }
});

voirPlus.addEventListener("mouseleave", () => {
  if (animation) {
    animation.resume();
  }
});

setInterval(bounceAnimation, 2000);

const bubbles = document.querySelectorAll(".language");

bubbles.forEach((bubble) => {
  bubble.addEventListener("mousemove", (e) => {
    const rect = bubble.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    gsap.to(bubble, {
      x: -deltaX * 0.5,
      y: -deltaY * 0.5,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  bubble.addEventListener("mouseleave", () => {
    gsap.to(bubble, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
  });
});
