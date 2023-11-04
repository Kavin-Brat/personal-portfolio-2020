//nav-bar
const menuIcon=document.querySelector('.hamburgur-menu');
const navBar=document.querySelector('.nav-bar');
menuIcon.addEventListener('click',()=>{
    navBar.classList.toggle('change');
});
const navLink=document.querySelectorAll('.nav-link');
navLink.forEach( link =>{
    link.addEventListener('click', ()=>{
        navBar.classList.remove('change');
    })
});
