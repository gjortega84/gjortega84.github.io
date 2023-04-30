const burga = document.querySelector('.burga');
const menu = document.querySelector('.menu-navegacion');
// console.log(burga);
// console.log(menu);

burga.addEventListener('click',()=>{
    menu.classList.toggle("spread");
});

window.addEventListener('click', (e)=>{
// console.log(e.target);
if(menu.classList.contains('spread') && e.target != menu && e.target!=burga)
{
    // console.log(e.target)
    menu.classList.toggle("spread");
}
});