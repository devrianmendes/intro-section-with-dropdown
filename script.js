const hamburguer = document.querySelector('.hamburguer');
const main = document.querySelector('main');
const sidebar = document.querySelector('.navbar');
const subMenu = document.querySelectorAll('.open-menu');
const dropdown = document.querySelectorAll('.dropdown-menu');
const body = document.querySelector('body');
const hero = document.querySelector('.intro-img-wrapper img');
const events = ['resize', 'load'];

function handleSidebar() {
  const classes = [hamburguer, main, sidebar];
  classes.forEach((element) => {
    element.classList.toggle('ativo');
  });
}

function defineOverflow() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (height > 739 && width < 521) {
    body.style.overflow = 'hidden';
  }
}

function handleIntroImg() {
  const width = window.innerWidth;
  if (width < 992) {
    hero.setAttribute('src', './img/image-hero-mobile.png');
  } else {
    hero.setAttribute('src', './img/image-hero-desktop.png');
  }
}

function handleSubMenu(index) {
  dropdown[index].classList.toggle('ativo');
}

function outside(event) {
  if (!event.target.classList.contains('open-menu')) {
    dropdown.forEach((eachDropdown) => {
      eachDropdown.classList.remove('ativo');
    });
  }
}

hamburguer.addEventListener('click', handleSidebar);

events.forEach((event) => {
  window.addEventListener(event, () => {
    handleIntroImg();
    defineOverflow();
  });
});

window.addEventListener('resize', () => {
  handleIntroImg();
  defineOverflow();
});

subMenu.forEach((eachSubMenu, index) => {
  eachSubMenu.addEventListener('click', () => {
    handleSubMenu(index);
  });
});

window.addEventListener('click', () => {
  outside();
});
