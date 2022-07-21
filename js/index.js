let containerButtons = document.querySelector(".buttons")
let result           = document.querySelector("#result")

containerButtons.addEventListener("click", function printButtons(event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.innerHTML == "CE") {
            result.innerHTML = ""
        } else if (event.target.innerHTML == "DEL") {
            let inputToArray = result.innerHTML.split('')
            inputToArray.splice(-1, 1)
            result.innerHTML = array.join('')
        } else if (event.target.innerHTML == "=") {
            result.innerHTML = eval(result.innerHTML)
            result.classList.add("closeResult")
        } else {
            if (result.classList.contains("closeResult")) {
                result.innerHTML = ""
                result.classList.remove("closeResult")
            }
            result.innerHTML += event.target.innerHTML
        }
    }

})