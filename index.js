const formulario = document.querySelector("#formulario");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const ajax = new XMLHttpRequest();

    ajax.open("GET", "mensaje.json", true)
    ajax.onreadystatechange = () => {
        console.log("readyState", ajax.readyState)

        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                const datos = JSON.parse(ajax.responseText)
                mensaje.textContent = datos.mensaje
                formulario.reset()
            } else {
                mensaje.textContent = `Error ${ajax.status}: ${ajax.statusText}`
            }
        }
    }

    ajax.send(null)
})