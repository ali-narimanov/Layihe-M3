let li1 = document.querySelector('.li-1');
li1.addEventListener('click', ()=>{
    li1.style.backgroundColor="#833AE0"
    li1.style.color="white"
    li2.style.color="black";
    li2.style.backgroundColor="white"
})
let li2 = document.querySelector('.li-2');
li2.addEventListener('click',()=>{
    li2.style.backgroundColor="#833AE0"
    li2.style.color="white"
    li1.style.color="black";
    li1.style.backgroundColor="white"
})