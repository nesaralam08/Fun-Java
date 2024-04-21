const target = document.querySelector('.no');
let yes = document.querySelector('.yes')
yes.addEventListener('click',()=> {
alert("Love you too jaan");
})

target.addEventListener('mouseenter', ()=>{
    const maxWidth = 200;
    const maxHeight = 300;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';
})

