
var t1 = gsap.timeline();
t1.from(".part1 img,.part2 h3 , .part3 h3 , .part3 button", {
    y:-100,
    duration : 1, 
    delay:1,
    opacity : 0 , 
    stagger :0.2

}) 

t1.from(".hero h1",{
    y:100,
    opacity:0, 
    stagger:0.3,
    duration:1 ,

}) 

t1.from(".hero img" , {
    scale:1.6,
    stagger:0.2,
    opacity:0 ,

})