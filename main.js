let listaPacientes;

// Cargar la lista de pacientes desde el localStorage al cargar la página
if (localStorage.getItem("listaPacientes")) {
    listaPacientes = JSON.parse(localStorage.getItem("listaPacientes"));
    mostrarUltimosPacientes();
} else {
    fetch("./pacientes.json")
        .then(response => response.json())
        .then(data => {
            listaPacientes = data.pacientes;
            localStorage.setItem("listaPacientes", JSON.stringify(listaPacientes));
            mostrarUltimosPacientes()
        })
        .catch(error => console.error('Error al cargar los pacientes:', error));
}

const inputApellido = document.getElementById("busquedaApellido");
const buscarApellido = document.getElementById("botonBuscar");
const agregarPaciente = document.getElementById("botonAgregar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

function mostrarResultados(pacientesEncontrados) {
    resultadoBusqueda.innerHTML = "";
    if (pacientesEncontrados.length > 0) {
        pacientesEncontrados.forEach((paciente, index) => {
            const divResultado = document.createElement("div");
            divResultado.classList.add("resultado");
            divResultado.innerHTML = `
                <h2> ${paciente.nombre} ${paciente.apellido}</h2>
                <p> DNI: ${paciente.dni}</p>
                <p> Área: ${paciente.area}</p>
                <p> Fecha de agregado: ${paciente.fecha.toLocaleString()}</p>  
            `;
            resultadoBusqueda.appendChild(divResultado);

            // Contenedor para la línea divisoria
            const lineaDivisoriaContainer = document.createElement("div");
            lineaDivisoriaContainer.classList.add("linea-divisoria-container");

            // Añadir línea divisoria si no es el último paciente
            if (index < pacientesEncontrados.length - 1) {
                const lineaDivisoria = document.createElement("div");
                lineaDivisoria.classList.add("linea-divisoria");
                lineaDivisoriaContainer.appendChild(lineaDivisoria);
            }

            resultadoBusqueda.appendChild(lineaDivisoriaContainer);
        });
    } else {
        resultadoBusqueda.textContent = "No se encontraron pacientes con ese apellido. Para agregarlo al sistema, pulse Agregar Paciente";
    }
}

buscarApellido.addEventListener("click", function () {
    const inputBusquedaApellido = document.getElementById("busquedaApellido");
    const apellidoIngresado = inputBusquedaApellido.value;
    const pacientesEncontrados = listaPacientes.filter((paciente) => paciente.apellido.toUpperCase().includes(apellidoIngresado.toUpperCase()));
    mostrarResultados(pacientesEncontrados);
});

agregarPaciente.addEventListener("click", function () {
    mostrarFormularioAgregarPaciente();
});

function mostrarFormularioAgregarPaciente() {
    resultadoBusqueda.innerHTML = "";

    const formAgregarPaciente = document.createElement("form");
    formAgregarPaciente.classList.add("formulario")
    formAgregarPaciente.innerHTML = `
        <h3 class="subtitulo"> Agregar Nuevo Paciente</h3>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required><br>
        <label for="dni">DNI:</label>
        <input type="number" id="dni" name="dni" required><br>
        <label for="area">Área de Atención:</label>
        <input type="text" id="area" name="area" required><br>
        <input type="submit" class="boton" value="Agregar">
    `;

    resultadoBusqueda.appendChild(formAgregarPaciente);

    formAgregarPaciente.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = formAgregarPaciente.querySelector("#nombre").value;
        const apellido = formAgregarPaciente.querySelector("#apellido").value;
        const dni = formAgregarPaciente.querySelector("#dni").value;
        const area = formAgregarPaciente.querySelector("#area").value;
        const fecha = new Date();
        const paciente = { nombre, apellido, dni, area, fecha };
        listaPacientes.push(paciente);
        localStorage.setItem("listaPacientes", JSON.stringify(listaPacientes));
        Swal.fire({
            icon: 'success',
            title: 'Paciente Agregado',
            text: `${nombre} ${apellido} ha sido agregado a la base de datos. ¡Gracias!`,
        });

        mostrarUltimosPacientes();

        resultadoBusqueda.innerHTML = "";
    });
}

function mostrarUltimosPacientes() {
    // Limpiar y agregar el div al lado derecho
    const contenedorDerecho = document.getElementById("contenedor-derecho");
    contenedorDerecho.innerHTML = ""; // Limpiar contenido existente

    const divUltimosPacientes = document.createElement("div");
    divUltimosPacientes.classList.add("ultimos-pacientes");

    // "Ultimos Pacientes Agregados"
    const tituloUltimosPacientes = document.createElement("h3");
    tituloUltimosPacientes.textContent = "Últimos Pacientes Agregados";
    tituloUltimosPacientes.classList.add("subtitulos")
    divUltimosPacientes.appendChild(tituloUltimosPacientes);

    // Obtener los ultimos 3 pacientes agregados
    const ultimosPacientes = listaPacientes.slice(-3);

    ultimosPacientes.forEach((paciente) => {
        const divPaciente = document.createElement("div");
        divPaciente.classList.add("ultimo-paciente");
        divPaciente.innerHTML = `
            <h4>${paciente.nombre} ${paciente.apellido}</h4>
            <p>DNI: ${paciente.dni}</p>
            <p>Área: ${paciente.area}</p>
            <p>Fecha de agregado: ${paciente.fecha.toLocaleString()}</p>
        `;
        divUltimosPacientes.appendChild(divPaciente);
    });

    contenedorDerecho.appendChild(divUltimosPacientes);

    // Guardar la información en el localStorage
    localStorage.setItem("ultimosPacientes", divUltimosPacientes.innerHTML);
}
