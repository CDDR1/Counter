const counter = document.querySelector("h2")
const decrease = document.querySelectorAll("button")[0]
const reset = document.querySelectorAll("button")[1]
const increase = document.querySelectorAll("button")[2]
let currentCount = 0

reset.addEventListener("click", () => {
    currentCount = 0
    counter.innerText = currentCount
    counter.style.color = "#000"
})

increase.addEventListener("click", () => {
    currentCount += 1
    counter.innerText = currentCount

    if (currentCount > 0) {
        counter.style.color = "green"
    }
    else if (currentCount < 0) {
        counter.style.color = "red"
    }
    else {
        counter.style.color = "#000"
    }
})

decrease.addEventListener("click", () => {
    currentCount -= 1
    counter.innerText = currentCount

    if (currentCount > 0) {
        counter.style.color = "green"
    }
    else if (currentCount < 0) {
        counter.style.color = "red"
    }
    else {
        counter.style.color = "#000"
    }
})

