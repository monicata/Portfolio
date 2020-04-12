const navSlide = () => {
    const burger = document.querySelector('.menu-icon');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('menu-active');
    });

}
navSlide();