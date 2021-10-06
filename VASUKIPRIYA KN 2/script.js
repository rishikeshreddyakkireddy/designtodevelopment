function fb1() {
    var img1 = document.getElementsByTagName("img")[0];
    img1.setAttribute("src","./fbdark.png")
}
function fb2() {
    var img2 = document.getElementsByTagName("img")[0];
    img2.setAttribute("src","./fblight.png")
}
function in1() {
    var img3 = document.getElementsByTagName("img")[1];
    img3.setAttribute("src","./instadark.png")
}
function in2() {
    var img4 = document.getElementsByTagName("img")[1];
    img4.setAttribute("src","./instalight.png")
}
function tw1() {
    var img5 = document.getElementsByTagName("img")[2];
    img5.setAttribute("src","./twdark.png")
}
function tw2() {
    var img6 = document.getElementsByTagName("img")[2];
    img6.setAttribute("src","./twlight.png")
}

var menuToggle = document.querySelector('.toggle')
var showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click',()=> {
        menuToggle.classList.toggle('active')
        showcase.classList.toggle('active')
})

