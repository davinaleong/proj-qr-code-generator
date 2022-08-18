const formEl = document.querySelector(`[data-form]`)
const outputEl = document.querySelector(`[data-output]`)

let url = ``
let size = ``
let fgColor = ``
let bgColor = ``

formEl.addEventListener(`submit`, (event) => {
    event.preventDefault()
    console.log(formEl.elements)
})