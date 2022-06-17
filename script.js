const hamburguer = document.querySelector('.hamburguer');
const main = document.querySelector('main');
const sidebar = document.querySelector('.navbar');
const subMenu = document.querySelectorAll('.open-menu');
const dropdown = document.querySelectorAll('.dropdown-menu');
const body = document.querySelector('body');
const hero = document.querySelector('.intro-img-wrapper img');
const events = ['resize', 'load', 'click'];
const classes = [hamburguer, main, sidebar];

function handleSidebar() {
  classes.forEach((element) => {
    element.classList.toggle('ativo');
  });
}

function handleOverflow(width, height) {
  if (height > 739 && width < 521) {
    body.style.overflow = 'hidden';
  }
}

function handleIntroImg(width) {
  if (width < 992) {
    hero.setAttribute('src', './img/image-hero-mobile.png');
  } else {
    hero.setAttribute('src', './img/image-hero-desktop.png');
  }
}

function handleClickSubMenu(index) {
  dropdown[index].classList.toggle('ativo');
  subMenu[index].classList.toggle('ativo');
}

function handleOutsideClick(event) {
  if (!event.target.classList.contains('open-menu')) {
    dropdown.forEach((eachDropdown) => {
      eachDropdown.classList.remove('ativo');
    });
    subMenu.forEach((eachSubMenu) => {
      eachSubMenu.classList.remove('ativo');
    });
  }

  if (event.composedPath().includes(main) && sidebar.classList.contains('ativo')) {
    classes.forEach((element) => {
      element.classList.remove('ativo');
    });
  }
}

hamburguer.addEventListener('click', handleSidebar);

subMenu.forEach((eachSubMenu, index) => {
  eachSubMenu.addEventListener('click', () => {
    handleClickSubMenu(index);
  });
});

events.forEach((eachEvent) => {
  window.addEventListener(eachEvent, () => {
    if (eachEvent !== 'click') {
      const width = window.innerWidth;
      const height = window.innerHeight;
      handleIntroImg(width);
      handleOverflow(width, height);
      if (width > 991) {
        classes.forEach((element) => {
          element.classList.remove('ativo');
        });
        dropdown.forEach((eachDropdown) => {
          eachDropdown.classList.remove('ativo');
        });
        subMenu.forEach((eachSubMenu) => {
          eachSubMenu.classList.remove('ativo');
        });
      }
    } else {
      handleOutsideClick(event);
    }
  });
});
