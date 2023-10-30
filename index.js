const navbar = document.getElementById('navbar')
const scrollLevel = window.scrollY;


window.addEventListener('scroll',()=>{
  const actualLevel = window.scrollY;
  
console.log(actualLevel);
  if(actualLevel > scrollLevel) {
    navbar.style.opacity ='0';
  }
  else {
    navbar.style.opacity ='1';
  }

});

