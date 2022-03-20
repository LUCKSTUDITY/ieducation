burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightNav = document.querySelector('.rightNav');
navbar
burger.addEventListener('click' , ()=>{
      rightNav.classList.toggle('visibility-class-rsp')
      navlist.classList.toggle('visibility-class-rsp')
      navbar.classList.toggle('h-nav-rsp')
})