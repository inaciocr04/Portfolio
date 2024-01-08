 const theme = document.getElementById("theme-button");
 const icon = document.getElementById("theme-logo");
const nomTheme = document.getElementById("dark-light-mode");

 theme.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.className = "bi bi-brightness-high-fill";
    nomTheme.innerHTML = "Light mode"
  } else{
    icon.className = "bi bi-moon-fill";
    nomTheme.innerHTML = "Dark mode"
  }
 }

  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav_links");

  menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
  });

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

  const onglets = document.querySelectorAll('#bouton');
  const contenu = document.querySelectorAll('.type');

  let index = 0;

  onglets.forEach(onglet =>{
    onglet.addEventListener('click', () =>{
      if(onglet.classList.contains('active')){
        return;
      } else{
        onglet.classList.add('active');
      }

      index = onglet.getAttribute('data-anim');

      for( i = 0; i < onglets.length; i++){

        if(onglets[i].getAttribute('data-anim') != index ){
          onglets[i].classList.remove('active');
        }
      }

      for(j = 0; j < contenu.length; j++){

        if(contenu[j].getAttribute('data-anim') == index){
          contenu[j].classList.add('active-contenu');
        } else{
          contenu[j].classList.remove('active-contenu');
        }
      }
    })
  })




  function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e){
  if (window.innerWidth <= 600) {
    return; // Ne pas exécuter la logique JavaScript pour les petits écrans
  }
    const{
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    console.log(dist);

    if (down && !full){
        set = Math.max(set, dist);
            line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full){
        full = true;
        line.style.bottom = `-50px`
    }

    sections.forEach(item => {
        //console.log(items);
        const rect = item.getBoundingClientRect();

        if(rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me')
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('apparait');
    } else {
      entry.target.classList.remove('apparait')
    }
  });
});
const leftElements = document.querySelectorAll('.gauche');
const rightElements = document.querySelectorAll('.droite');
const topElements = document.querySelectorAll('.haut');


leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));
topElements.forEach((el) => observer.observe(el));


var typingEffect = new Typed(".multitext", {
  strings: [
    "le développement front-end",
    "le développement back-end",
    "l'intrégration web",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});