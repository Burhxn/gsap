var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var image = document.querySelector("#image")


main.addEventListener("mousemove", (dets) => {
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