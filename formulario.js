document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        alert(JSON.stringify(data))
    })