const click = document.getElementById("sahithiName")
const click1 = document.getElementById("sravanName")
const screenView = document.getElementById("display")
const screenView1 = document.getElementById("love")

click.addEventListener('click', function(){
    screenView.classList.toggle('display')
    
})

click1.addEventListener('click', function(){
    screenView1.classList.toggle('love')
})



// click.addEventListener('dblclick', function(){
//     screenView.style.display= "none"
// })


