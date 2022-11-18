const rubl=document.getElementById("rubl");
const dollar=document.getElementById("dollar");
const euro=document.getElementById("euro");
const funts=document.getElementById("funts");
const rubl1= document.getElementById('rubl1');
const dollar1= document.getElementById('dollar1');
const euro1 = document.getElementById('euro1');
const funst1 = document.getElementById('funts1')
let enterBtn = document.querySelector('.btn1');
const input1 = document.getElementsByName('first-input')[0];
const input2 = document.getElementsByName('second-input')[0];
let ul1 = document.querySelector('.ul1');
let ul2 = document.querySelector('.ul2')
let h2= document.querySelector('.text2')
let h1= document.querySelector('.text1')
const one = document.getElementsByName('one');
const two = document.getElementsByName('two');
function currencyChange(e){
    if(e.target.className == "currency" || e.target.className=='currency1'){
        const changes=[...e.target.parentElement.children];
        changes.forEach(item=>{
            if(item.classList.contains('change')){
                item.classList.remove('change');
            }
        })
        e.target.classList.add('change')
    };
}
rubl.addEventListener("click",currencyChange);
dollar.addEventListener("click",currencyChange);
euro.addEventListener('click',currencyChange);
funts.addEventListener('click',currencyChange);
rubl1.addEventListener("click",currencyChange);
dollar1.addEventListener("click",currencyChange);
euro1.addEventListener('click',currencyChange);
funst1.addEventListener('click',currencyChange);
const p1=document.querySelector('.text1');
const p2 = document.querySelector('.text2');
let first;
let second;
input1.addEventListener('keypress',()=>{
   one.forEach(item=>{
    if(item.classList.contains('change')){
        first = item.innerText
    }
   })
    two.forEach(item=>{
        if(item.classList.contains('change')){
            second=item.innerText
        }
    });
    fetch(`https://api.exchangerate.host/latest?base=${first}&symbols=${second}`)
    .then(r=>r.json())
    .then((data)=>{  
        input2.value=(Number(input1.value)*data.rates[second]).toFixed(3);
        p1.innerText=`1 ${first} = ${data.rates[second]} ${second}`;
        p2.innerText=`1 ${second} = ${1/data.rates[second]} ${first}`;
    })
})
input2.addEventListener('keypress',()=>{
    one.forEach(item=>{
     if(item.classList.contains('change')){ 
         first = item.innerText
     }
    })
     two.forEach(item=>{
         if(item.classList.contains('change')){ 
             second=item.innerText
         }
     });
     fetch(`https://api.exchangerate.host/latest?base=${second}&symbols=${first}`)
     .then(r=>r.json())
     .then((data)=>{
         input1.value=(Number(input2.value)*data.rates[first]).toFixed(3);
         p1.innerText=`1 ${first} = ${1/data.rates[first]} ${second}`;
         p2.innerText=`1 ${second} = ${data.rates[first]} ${first}`; 
     })
 })

 