
let cardImageOne = document.getElementById('cardImageOne')
let cardUnoDesc = document.getElementById('cardUnoDesc')
cardUnoDesc.addEventListener('mouseover', function(){
   cardImageOne.style.opacity = '.5'
   cardImageOne.style.transition = '2s ease'
   
})
cardUnoDesc.addEventListener('mouseleave', function(){
   cardImageOne.style.opacity = '1'
   cardImageOne.style.transition = '2s ease'
   
})


let cardImageTwo = document.getElementById('cardImageTwo')
let cardDoceDesc = document.getElementById('cardDoceDesc')
cardDoceDesc.addEventListener('mouseover', function(){
   cardImageTwo.style.opacity = '.5'
   cardImageTwo.style.transition = '2s ease'
   
})
cardDoceDesc.addEventListener('mouseleave', function(){
   cardImageTwo.style.opacity = '1'
   cardImageTwo.style.transition = '2s ease'
   
})


let cardImageThree = document.getElementById('cardImageThree')
let cardTraceDesc = document.getElementById('cardTraceDesc')
cardTraceDesc.addEventListener('mouseover', function(){
   cardImageThree.style.opacity = '.5'
   cardImageThree.style.transition = '2s ease'
   
})
cardTraceDesc.addEventListener('mouseleave', function(){
   cardImageThree.style.opacity = '1'
   cardImageThree.style.transition = '2s ease'
   
})