const $form = document.getElementById('form')
const $buttonMailto = document.getElementById('correo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:brianestebangauna@gmai.com?subject=nombre ${form.get('nombre')} apellido ${form.get('apellido')} correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}