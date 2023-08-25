
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
    if(!container.classList.contains("active")){
        container.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}    
function cancel(){
    const container = document.querySelector(".works-container");
    document.body.style.overflow = 'auto';
        container.classList.remove("active");
        container.classList.remove("active2");
        container.classList.remove("active3");
}


function show2(){
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if(!container.classList.contains("active2")){
        container.classList.add("active2");
        document.body.style.overflow = 'hidden';
    }
}    
function show3(){
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if(!container.classList.contains("active3")){
        container.classList.add("active3");
        document.body.style.overflow = 'hidden';
    }
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



const catalogue = document.querySelectorAll('.catalogue');

catalogue.forEach(element => {
    element.addEventListener('click', () => {
        window.open(element.src, '_blank');
    });
});