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
    li3.style.backgroundColor= "white";
    li3.style.color="black"
    li4.style.backgroundColor="white"
    li4.style.color="black"
})

li2.addEventListener('click',()=>{
    li2.style.backgroundColor="#833AE0"
    li2.style.color="white"
    li1.style.color="black";
    li1.style.backgroundColor="white"
    li3.style.backgroundColor="white"
    li3.style.color="black";
    li4.style.backgroundColor="white"
    li4.style.color="black"
    
})
li3.addEventListener('click',()=>{
    li3.style.backgroundColor="#833AE0"
    li3.style.color="white"
    li1.style.color="black";
    li1.style.backgroundColor="white"
    li2.style.color="black";
    li2.style.backgroundColor="white"
    li4.style.backgroundColor="white"
    li4.style.color="black"
})
li4.addEventListener('click',()=>{
    li4.style.backgroundColor="#833AE0"
    li4.style.color="white"
    li1.style.color="black";
    li1.style.backgroundColor="white"
    li2.style.color="black";
    li2.style.backgroundColor="white"
    li3.style.backgroundColor="white"
    li3.style.color="black";
})
    

li5.addEventListener('click', ()=>{
    li5.style.backgroundColor="#833AE0"
    li5.style.color="white"
    li6.style.color="black";
    li6.style.backgroundColor="white"
    li7.style.backgroundColor= "white";
    li7.style.color="black"
    li8.style.backgroundColor="white"
    li8.style.color="black"
})

li6.addEventListener('click', ()=>{
    li6.style.backgroundColor="#833AE0"
    li6.style.color="white"
    li5.style.color="black";
    li5.style.backgroundColor="white"
    li7.style.backgroundColor= "white";
    li7.style.color="black"
    li8.style.backgroundColor="white"
    li8.style.color="black"
});


li7.addEventListener('click', ()=>{
    li7.style.backgroundColor="#833AE0"
    li7.style.color="white"
    li5.style.color="black";
    li5.style.backgroundColor="white"
    li6.style.backgroundColor= "white";
    li6.style.color="black"
    li8.style.backgroundColor="white"
    li8.style.color="black"
});
li8.addEventListener('click', ()=>{
    li8.style.backgroundColor="#833AE0"
    li8.style.color="white"
    li5.style.color="black";
    li5.style.backgroundColor="white"
    li7.style.backgroundColor= "white";
    li7.style.color="black"
    li6.style.backgroundColor="white"
    li6.style.color="black"
});


//--lis' style changes





// начальное значение рубля в доллары
let h2= document.querySelector('.text2')
let h1= document.querySelector('.text1')
  fetch("https://api.exchangerate.host/latest?base=RUB&symbols=USD")
  .then(resp => resp.json())
  .then(data => {
   
   let a = data.rates.USD
   console.log(a)

h1.innerHTML= "1 RUB = " + a + " USD";
    })  
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=RUB")
    .then(resp1 => resp1.json())
    .then(data1 => {
     
     let b = data1.rates.RUB
     console.log(b)
  
  h2.innerHTML= "1 USD = " + b + " RUB";
  
      })  
   // начальное значение рубля в доллары

 function changCurr(){
    if(
        li2.style.color = 'white' ){
        h1.innerHTML='123';
    }
 }

   