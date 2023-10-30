const navbar = document.getElementById('navbar')
const scrollLevel = window.scrollY;



window.addEventListener('scroll',(e) =>{
  const actualLevel = window.scrollY;
  
  if(actualLevel > scrollLevel) {
    navbar.style.top ='-60px';
  }
  else {
    navbar.style.top ='0';
  }

});


