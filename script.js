function togglemode() { 
const html = document.documentElement
html.classList.toggle("ligth")

const img =document.querySelector("#profileimg")

if(html.classList.contains ('ligth')) {

img.setAttribute('src', './Profile-ligth.jpg')

} else {

img.setAttribute('src',  './Profile.jpeg')
}






}

