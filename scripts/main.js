const formEl = document.querySelector(`[data-form]`)
const outputEl = document.querySelector(`[data-output]`)

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault()
  outputEl.innerHTML = `
        <i class="fa fa-spinner fa-spin fa-10x text-primary-400"></i>
    `
  const url = formEl.elements[`url`].value
  const size = formEl.elements[`size`].value
  const fgColor = formEl.elements[`fg-color`].value
  const bgColor = formEl.elements[`bg-color`].value

  console.log(
    `url: `,
    url,
    `size: `,
    size,
    `fgColor: `,
    fgColor,
    `bgColor: `,
    bgColor
  )
})
