const numbercount=document.getElementById('number_display')
const increasebutton=document.getElementById('increase_count')
const decreasebutton=document.getElementById('decrease_count')
let number=0
increasebutton.addEventListener('click',()=>{
    number+=5
    numbercount.textContent=number.toString()
})
decreasebutton.addEventListener('click',()=>{
    number-=5
    numbercount.textContent=number.toString()
})