document.addEventListener('DOMContentLoaded', () => {

  
  
  const menuOpen = document.querySelector('#menu-open');
  const menuClose = document.querySelector('#close-menu');


  const mainMenu = document.querySelector('.main-menu');

  // // funcion muestra menu lateral
  const showMenu = () => {
  
    mainMenu.classList.add('show-menu');
    menuOpen.classList.add('active-menu');
    menuClose.classList.remove('active-menu');
  
  }



  // // funcion oculta menu lateral
  const hideMenu = () => {
  
    mainMenu.classList.remove('show-menu');
    menuClose.classList.add('active-menu');
    menuOpen.classList.remove('active-menu');
  }


  menuOpen.addEventListener('click', showMenu);
  menuClose.addEventListener('click', hideMenu);

  // * a partir de aca el sub menu


  const subMenuItem = document.querySelectorAll('.main-menu__item');

  subMenuItem.forEach((item) => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      item.addEventListener('click', (e) => {
        e.stopPropagation()  
        if(submenu.classList.contains('active-submenu')){
          submenu.classList.remove('active-submenu');
          submenu.classList.add('desactive-submenu');
          
        }else{
          submenu.classList.add('active-submenu');
          submenu.classList.remove('desactive-submenu');
        }
      })
    }
    const arrow = item.querySelector('.arrow');
    if(arrow){
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        if(arrow.classList.contains('arrow')){
          arrow.classList.remove('arrow');
          arrow.classList.add('active-arrow');
        }else{
          arrow.classList.add('arrow');
          arrow.classList.remove('active-arrow');
        }
      })
    }    
  })

})