let btnplus = document.querySelector(".btnplus")
let btnminus = document.querySelector(".btnminus")
let shownumber = document.querySelector(".shownumber")
let counter = 0;

btnminus.addEventListener("click", function greet() {
    counter--
    shownumber.innerHTML = counter
})
btnplus.addEventListener("click", function greet() {
    counter++
    shownumber.innerHTML = counter
})