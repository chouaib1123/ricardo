
/*navbar animation concept*/
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(item => {
                item.classList.remove("currentclick");
            });
            item.classList.add("currentclick");
        });
    });
});



/*carousel concept*/
$(document).ready(function(){
    $('.carousel').carousel({
      padding:200
    });
    autoplay();
    function autoplay(){
      $('.carousel').carousel('next');
      setTimeout(autoplay,3500);
    }
    });





/*popup concept*/
function show(){
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if(container.classList.contains("active")){
    
        container.classList.remove("active");
        document.body.style.overflow = 'auto';
    }
    else{ 
        container.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}    
function cancel(){
    const container = document.querySelector(".works-container");
    document.body.style.overflow = 'auto';
        container.classList.remove("active");
    
  
}



window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar-container');
    const home=document.querySelector('.cercle');
    const firstsection = document.querySelector('.first_vue');
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= navbarHeight) {
        navbar.classList.add('sticky');
        firstsection.classList.add('under-navbar');
        home.classList.add('ssticky');
    } else {
        navbar.classList.remove('sticky');
        home.classList.remove('ssticky');
        firstsection.classList.remove('under-navbar');
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-item a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});





const backToTopButton = document.getElementById('back-to-top-btn');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const catalogueImages = document.querySelectorAll('.catalogueimage');

catalogueImages.forEach(image => {
    image.addEventListener('click', () => {
        window.open(image.src, '_blank');
    });
});