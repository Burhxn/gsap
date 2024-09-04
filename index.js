var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var image = document.querySelector("#image")


window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5
    })


})
image.addEventListener("mouseenter", (dets) => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        duration: 1,
        backgroundColor: "#ffffff7c",

        scale: 2
    })


})



image.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = ""

    gsap.to(cursor, {
        duration: 1,
        scale: 1,
        backgroundColor: "black",

    })

})

var container= document.querySelector(".text")
// var tl =gsap.timeline({repeat:-1});


window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
        gsap.to(".text",{
            transform : "translateX(-200%)",
            duration : 4,
            repeat :-1,
            ease : "none",
            // stagger :1
        }) 
        gsap.to(".text img",{
            rotate : 180
        })
    }else{
        gsap.to(".text",{
            transform : "translateX(0%)",
            duration : 4,
            repeat :-1,
            ease : "none",
            
        }) 
        gsap.to(".text img",{
            rotate : 0
        })

    }
    
})

