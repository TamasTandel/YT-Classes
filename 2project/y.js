
let menu = document.querySelector("nav #menu")
let close = document.querySelector("#Bar #close")

tl=gsap.timeline()


tl.to("#Bar",{
    right:0,
    duration:0.4
})
tl.from("#sideBar a",{
    x:100,
    opacity:0,
    stagger:0.25,
})


    tl.pause()
    
menu.addEventListener("click", function (){
    tl.play()
})
close.addEventListener("click", function(){
    tl.reverse()
})
