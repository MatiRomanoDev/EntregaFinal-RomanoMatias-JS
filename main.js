// Simulador de pacientes de una clinica

// Ejecutar las funciones por consola para filtrar por apellido, area en que se atendió o para agregar un nuevo paciente si no se encuentra en la lista.

/* if (localStorage.getItem('listaPacientes')) {
    listaPacientes = JSON.parse(localStorage.getItem('listaPacientes'));
} */

const inputApellido = document.getElementById("busquedaApellido")
const buscarApellido = document.getElementById("botonBuscar")
const agregarPaciente = document.getElementById("botonAgregar")


const Paciente = function(nombre,apellido,dni,area,fecha){
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.area = area
    this.fecha = fecha
} 

let paciente1 = new Paciente("Juan", "Garcia", 123456789, "Cardiologia", new Date("2003-05-10"));
let paciente2 = new Paciente("Maria", "Lopez", 234567890, "Pediatria", new Date("2005-09-22"));
let paciente3 = new Paciente("Carlos", "Martinez", 345678901, "Neurologia", new Date("2002-02-15"));
let paciente4 = new Paciente("Laura", "Rodriguez", 456789012, "Dermatologia", new Date("2007-07-30"));
let paciente5 = new Paciente("Jose", "Hernandez", 567890123, "Oftalmologia", new Date("2004-11-18"));
let paciente6 = new Paciente("Ana", "Flores", 678901234, "Cardiologia", new Date("2000-08-05"));
let paciente7 = new Paciente("Pedro", "Gomez", 789012345, "Pediatria", new Date("2006-03-12"));
let paciente8 = new Paciente("Isabel", "Diaz", 890123456, "Neurologia", new Date("2001-10-27"));
let paciente9 = new Paciente("Martin", "Perez", 901234567, "Dermatologia", new Date("2009-01-08"));
let paciente10 = new Paciente("Luisa", "Torres", 112345678, "Oftalmologia", new Date("2008-06-14"));
let paciente11 = new Paciente("Javier", "Fernandez", 223456789, "Cardiologia", new Date("2002-12-03"));
let paciente12 = new Paciente("Rosa", "Ramirez", 334567890, "Pediatria", new Date("2005-04-19"));
let paciente13 = new Paciente("Miguel", "Santos", 445678901, "Neurologia", new Date("2004-08-27"));
let paciente14 = new Paciente("Carmen", "Vega", 556789012, "Dermatologia", new Date("2006-10-10"));
let paciente15 = new Paciente("Alberto", "Suarez", 667890123, "Oftalmologia", new Date("2000-09-15"));
let paciente16 = new Paciente("Sofia", "Ortega", 778901234, "Cardiologia", new Date("2003-07-02"));
let paciente17 = new Paciente("Raul", "Molina", 889012345, "Pediatria", new Date("2008-02-28"));
let paciente18 = new Paciente("Elena", "Castro", 990123456, "Neurologia", new Date("2001-05-17"));
let paciente19 = new Paciente("Diego", "Herrera", 100234567, "Dermatologia", new Date("2009-04-23"));
let paciente20 = new Paciente("Natalia", "Ruiz", 111345678, "Oftalmologia", new Date("2007-11-09"));
let paciente21 = new Paciente("Gabriel", "Luna", 122456789, "Cardiologia", new Date("2006-12-07"));
let paciente22 = new Paciente("Adriana", "Cabrera", 133567890, "Pediatria", new Date("2004-01-05"));
let paciente23 = new Paciente("Andres", "Guerrero", 144678901, "Neurologia", new Date("2002-06-20"));
let paciente24 = new Paciente("Valentina", "Flores", 155789012, "Dermatologia", new Date("2008-09-11"));
let paciente25 = new Paciente("Alejandro", "Mendoza", 166890123, "Oftalmologia", new Date("2005-10-26"));
let paciente26 = new Paciente("Camila", "Flores", 177901234, "Cardiologia", new Date("2007-03-14"));
let paciente27 = new Paciente("Roberto", "Rojas", 188012345, "Pediatria", new Date("2003-08-09"));
let paciente28 = new Paciente("Paola", "Navarro", 199123456, "Neurologia", new Date("2001-09-21"));
let paciente29 = new Paciente("Hector", "Gutierrez", 200234567, "Dermatologia", new Date("2009-02-16"));
let paciente30 = new Paciente("Carolina", "Jimenez", 211345678, "Oftalmologia", new Date("2000-04-05"));
let paciente31 = new Paciente("Fernando", "Lara", 222456789, "Cardiologia", new Date("2006-07-18"));
let paciente32 = new Paciente("Silvia", "Cruz", 233567890, "Pediatria", new Date("2005-12-12"));
let paciente33 = new Paciente("Julio", "Aguilar", 244678901, "Neurologia", new Date("2004-03-29"));
let paciente34 = new Paciente("Gloria", "Flores", 255789012, "Dermatologia", new Date("2002-10-07"));
let paciente35 = new Paciente("Ricardo", "Vargas", 266890123, "Oftalmologia", new Date("2003-01-24"));
let paciente36 = new Paciente("Alicia", "Moreno", 277901234, "Cardiologia", new Date("2008-06-01"));
let paciente37 = new Paciente("Juan Carlos", "Cordero", 288012345, "Pediatria", new Date("2006-09-14"));
let paciente38 = new Paciente("Marcela", "Mora", 299123456, "Neurologia", new Date("2001-12-27"));
let paciente39 = new Paciente("Rodrigo", "Fuentes", 300234567, "Dermatologia", new Date("2004-05-03"));
let paciente40 = new Paciente("Patricia", "Soto", 311345678, "Oftalmologia", new Date("2009-08-28"));
let paciente41 = new Paciente("Emilio", "Rios", 322456789, "Cardiologia", new Date("2002-11-09"));
let paciente42 = new Paciente("Lorena", "Paz", 333567890, "Pediatria", new Date("2007-04-14"));
let paciente43 = new Paciente("Oscar", "Reyes", 344678901, "Neurologia", new Date("2006-06-30"));
let paciente44 = new Paciente("Gabriela", "Gallardo", 355789012, "Dermatologia", new Date("2001-03-18"));
let paciente45 = new Paciente("Jorge", "Silva", 366890123, "Oftalmologia", new Date("2003-09-05"));
let paciente46 = new Paciente("Daniela", "Villalobos", 377901234, "Cardiologia", new Date("2005-01-20"));
let paciente47 = new Paciente("Eduardo", "Hidalgo", 388012345, "Pediatria", new Date("2008-04-12"));
let paciente48 = new Paciente("Roxana", "Mendez", 399123456, "Neurologia", new Date("2004-07-27"));
let paciente49 = new Paciente("Juan Pablo", "Miranda", 400234567, "Dermatologia", new Date("2002-12-02"));
let paciente50 = new Paciente("Mariana", "Flores", 411345678, "Oftalmologia", new Date("2001-05-09"));

// Hay 5 pacientes con apellido "flores" ( para probar en el dom)

let listaPacientes = [
    paciente1, paciente2, paciente3, paciente4, paciente5,
    paciente6, paciente7, paciente8, paciente9, paciente10,
    paciente11, paciente12, paciente13, paciente14, paciente15,
    paciente16, paciente17, paciente18, paciente19, paciente20,
    paciente21, paciente22, paciente23, paciente24, paciente25,
    paciente26, paciente27, paciente28, paciente29, paciente30,
    paciente31, paciente32, paciente33, paciente34, paciente35,
    paciente36, paciente37, paciente38, paciente39, paciente40,
    paciente41, paciente42, paciente43, paciente44, paciente45,
    paciente46, paciente47, paciente48, paciente49, paciente50
]


const resultadoBusqueda = document.getElementById("resultadoBusqueda");

    function mostrarResultados(pacientesEncontrados) {
        resultadoBusqueda.innerHTML = "";
        if (pacientesEncontrados.length > 0) {
            pacientesEncontrados.forEach((paciente) => {
                const divResultado = document.createElement("div");
                divResultado.classList.add("resultado");
                divResultado.innerHTML = `
                <h2> ${paciente.nombre} ${paciente.apellido}</h2>
                <p> DNI: ${paciente.dni}</p>
                <p> Área: ${paciente.area}</p>
                <p> Fecha de atención: ${paciente.fecha.toDateString()}</p>
                `;
                resultadoBusqueda.appendChild(divResultado);
            });
        } else {
            resultadoBusqueda.textContent = "No se encontraron pacientes con ese apellido. Para agregarlo al sistema, pulse Agregar Paciente";
        }
    }
    buscarApellido.addEventListener("click", function() {
        
        const inputBusquedaApellido = document.getElementById("busquedaApellido");
        
        const apellidoIngresado = inputBusquedaApellido.value;
        
        const pacientesEncontrados = listaPacientes.filter((paciente) => paciente.apellido.toUpperCase().includes(apellidoIngresado.toUpperCase()));
        
        mostrarResultados(pacientesEncontrados);
    });

    agregarPaciente.addEventListener("click", function() {
        mostrarFormularioAgregarPaciente();
    });

    function mostrarFormularioAgregarPaciente() {
        resultadoBusqueda.innerHTML = "";

        const formAgregarPaciente = document.createElement("form");
        formAgregarPaciente.innerHTML = `
            <h3> Agregar Nuevo Paciente</h3>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br>
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required><br>
            <label for="dni">DNI:</label>
            <input type="number" id="dni" name="dni" required><br>
            <label for="area">Área de Atención:</label>
            <input type="text" id="area" name="area" required><br>
            <input type="submit" value="Agregar">
        `;

        resultadoBusqueda.appendChild(formAgregarPaciente);

        formAgregarPaciente.addEventListener("submit", function(e) {
            e.preventDefault();
            const nombre = formAgregarPaciente.querySelector("#nombre").value;
            const apellido = formAgregarPaciente.querySelector("#apellido").value;
            const dni = formAgregarPaciente.querySelector("#dni").value;
            const area = formAgregarPaciente.querySelector("#area").value;
            const fecha = new Date();
            const paciente = new Paciente(nombre, apellido, dni, area, fecha);
            listaPacientes.push(paciente);
            localStorage.setItem('listaPacientes', JSON.stringify(listaPacientes));
            alert(nombre + " " + apellido + " ha sido agregado a la base de datos. Muchas gracias");
            resultadoBusqueda.innerHTML = "";
        });
    }    