const formEl = document.querySelector(`[data-form]`)
const outputEl = document.querySelector(`[data-output]`)

const renderOutput = (html) => {
  outputEl.innerHTML = html
}

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault()
  renderOutput(`
    <i class="fa fa-spinner fa-spin fa-10x text-primary-400"></i>
  `)
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

  let errors = ``

  if (!url) {
    errors += `
        <p class="text-danger-400">The <strong>URL</strong> field cannot be empty!</p>
    `
  }

  if (!size) {
    errors += `
        <p class="text-danger-400">The <strong>Size in pixels</strong> field cannot be empty!</p>
    `
  }

  if (!fgColor) {
    errors += `
        <p class="text-danger-400">The <strong>Foreground Color</strong> field cannot be empty!</p>
    `
  }

  if (!bgColor) {
    errors += `
        <p class="text-danger-400">The <strong>Background Color</strong> field cannot be empty!</p>
    `
  }

  if (errors) {
    renderOutput(errors)
  }

  if (!errors) {
    renderOutput(``)
    new QRCode(outputEl, {
      text: url,
      width: size,
      height: size,
      colorDark: fgColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H,
    })
  }
})
