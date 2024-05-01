const bar = document.getElementById('bar');
const close = getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()={
        nav.classList.add('ctive');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}