let li1 = document.querySelector('.li-1');
let li2 = document.querySelector('.li-2');
let li3 = document.querySelector('.li-3');
let li4 = document.querySelector('.li-4');
let li5 = document.querySelector('.li-5');
let li6 = document.querySelector('.li-6');
let li7 = document.querySelector('.li-7');
let li8 = document.querySelector('.li-8');
//-----------
let enterBtn = document.querySelector('.btn1');
//-----------
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
//-----------

//--lis' style changes
li1.addEventListener('click', ()=>{
    li1.style.backgroundColor="#833AE0"
    li1.style.color="white"
    li2.style.color="black";
    li2.style.backgroundColor="white"
})

li2.addEventListener('click',()=>{
    li2.style.backgroundColor="#833AE0"
    li2.style.color="white"
    li1.style.color="black";
    li1.style.backgroundColor="white"
})
//--lis' style changes