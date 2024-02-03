//Obtengo los elemento que estan dentro del formulario por ID
const formElement = document.getElementById("saveTransaction");

// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento del formulario por su ID para poder escuchar el evento de envío (submit).
    const formElement = document.getElementById("saveTransaction");

//#region de GET para mostrar los datos almacenado en el back al front
    // Función para obtener las transacciones del servidor y mostrarlas en la página.
    function fetchAndDisplayTransactions() {
        // Realiza una petición GET al servidor para obtener las transacciones.
        fetch('http://localhost:3000/prueba')
        .then(response => response.json()) // Convierte la respuesta a formato JSON.
        .then(transactions => {
            // Obtiene el contenedor donde se mostrarán las transacciones.
            const transactionsList = document.getElementById('transactionsList');
            transactionsList.innerHTML = ''; // Limpia el contenedor antes de añadir los nuevos elementos.

            // Itera sobre el array de transacciones y crea un elemento div para cada una.
            transactions.forEach(transaction => {
                const transactionElement = document.createElement('div');
                // Establece el texto del elemento con la descripción y el precio de la transacción.
                transactionElement.innerText = `${transaction.transactionDescription} - ${transaction.transactionPrice}`;
                // Añade el elemento de la transacción al contenedor.
                transactionsList.appendChild(transactionElement);
            });
        });
    }
//#endregion

//#region de POST para enviar los datos dados en el Front al Back

    // Añade un evento de escucha al formulario para manejar el envío (submit).
    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); //Evita que se recarge la pagina al dar enter al boton de enviar.
        
        // Obtiene los valores ingresados por el usuario en los campos del formulario.
        let transactionDescription = document.getElementById("transactionDescription").value;
        let transactionPrice = document.getElementById("transactionPrice").value;
        
        // Crea un objeto con los datos de la transacción.
        let transaction = {transactionDescription: transactionDescription, transactionPrice: transactionPrice};
        
        // Realiza una petición POST al servidor para guardar la nueva transacción, enviando el objeto en formato JSON.
        fetch('http://localhost:3000/prueba', {
            method: 'POST',
            body: JSON.stringify(transaction)
        })
        .then(response => {
            if (response.ok) { // Verifica si la petición fue exitosa.
                console.log('Se guardó a transacción');
                fetchAndDisplayTransactions(); // Actualiza la lista de transacciones mostradas en la página.
            }
        });
    });
    //#endregion

    // Carga inicialmente las transacciones existentes al cargar la página.
    fetchAndDisplayTransactions();
});


//#endregion



fetch('http://localhost:3000/prueba').then(x => x.json()).then(console.log)
