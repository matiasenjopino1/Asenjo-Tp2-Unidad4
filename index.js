const formulario = document.querySelector("#formulario");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const ajax = new XMLHttpRequest();

    ajax.open("POST", "guardar.php", true)
    ajax.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

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
    const datosFormulario = new FormData(formulario);

    const parametros = new URLSearchParams(datosFormulario);

    ajax.send(parametros);
})