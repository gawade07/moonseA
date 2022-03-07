let menuBtn = document.querySelector('.menu-btn');
let change  = document.querySelector('.menu-btn .fas');
let menuList  = document.querySelector('.menu');
let header = document.querySelector('header');

menuBtn.onclick = () =>
{
    change.classList.toggle('fa-times');
    menuList.classList.toggle('active');
    header.classList.toggle('active');
}
window.onscroll = () =>
{
    
    change.classList.remove('fa-times');
    menuList.classList.remove('active');
    header.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
     }else{
        header.classList.remove('active');
     }
}